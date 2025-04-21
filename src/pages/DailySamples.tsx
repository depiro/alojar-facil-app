
import React, { useState } from 'react';
import { CalendarIcon, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-primary mb-2">Muestras diarias</h1>
        <p className="text-muted-foreground mb-6">
          Registro diario de consultas a establecimientos sobre ocupación y disponibilidad
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-primary font-semibold">
                Martes, {format(date, 'dd')} de Abril de {format(date, 'yyyy')}
              </div>
              <div className="flex gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[200px] justify-start gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {format(date, 'dd/MM/yyyy')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(date) => date && setDate(date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Progreso de Contactos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={contactProgress.percentage} className="h-6 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {contactProgress.current} de {contactProgress.total} contactados ({contactProgress.percentage}%)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estadísticas de Ocupación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      Ocupación promedio anoche: 
                      <span className="font-semibold text-green-600 ml-1">
                        {occupancyStats.averageOccupancy}%
                      </span>
                    </p>
                    <p className="text-sm">
                      Habitaciones ocupadas: {occupancyStats.occupiedRooms} de {occupancyStats.totalRooms}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 mt-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar alojamiento..." className="pl-8" />
                </div>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Región" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las regiones</SelectItem>
                  <SelectItem value="north">Norte</SelectItem>
                  <SelectItem value="south">Sur</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="open">Abierto</SelectItem>
                  <SelectItem value="closed">Cerrado</SelectItem>
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
