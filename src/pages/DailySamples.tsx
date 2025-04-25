
import React, { useState } from 'react';
import { Building2Icon, CalendarIcon, Search, HomeIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from "@/components/ui/button";
import { DailySamplesTable } from '@/components/DailySamplesTable';
import { DailySamplesRegister } from '@/components/DailySamplesRegister';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from 'date-fns';
import MainLayout from '@/components/layout/MainLayout';

const DailySamples = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedSample, setSelectedSample] = useState("2");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [selectedEstablishment, setSelectedEstablishment] = useState<string | null>(null);

  const contactProgress = {
    current: 12,
    total: 15,
    percentage: 80
  };

  const occupancyStats = {
    averageOccupancy: 76,
    occupiedRooms: 124,
    totalRooms: 163
  };

  return (
    <MainLayout>
      <div className="6 space-y-6">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <HomeIcon className="h-4 w-4 mr-1" />
                  <span>Inicio</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Muestras diarias</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        
          <h1 className="text-3xl font-bold mt-2 text-gray-900">Muestras diarias</h1>
          <p className="text-muted-foreground mb-6">
            Registro diario de consultas a establecimientos sobre ocupación y disponibilidad
          </p>
        </div>


        <Card className="mb-6">
          <CardContent>
            <div className="flex gap-4 mt-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar por nombre establecimiento, localidad o región" className="pl-8" />
                </div>
              </div>

               <Select value={selectedSample} onValueChange={setSelectedSample}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Seleccionar muestra" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Muestra 1</SelectItem>
                    <SelectItem value="2">Muestra 2</SelectItem>
                    <SelectItem value="3">Muestra 3</SelectItem>
                  </SelectContent>
                </Select>
            </div>
          </CardContent>
        </Card>

        <DailySamplesTable onRegister={(establishment) => {
          setSelectedEstablishment(establishment);
          setShowRegisterForm(true);
        }} />

        {showRegisterForm && (
          <DailySamplesRegister
            establishmentName={selectedEstablishment || ""}
            onClose={() => setShowRegisterForm(false)}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default DailySamples;
