
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { DailySamplesTable } from '@/components/DailySamplesTable';
import { DailySamplesRegister } from '@/components/DailySamplesRegister';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { HomeIcon, ImageIcon } from 'lucide-react';

const Samples = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [selectedEstablishment, setSelectedEstablishment] = useState<string | null>(null);
  const [selectedSample, setSelectedSample] = useState("2");

  return (
    <MainLayout>
      <div className="container mx-auto p-6 space-y-6">
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
                <BreadcrumbPage>
                  <ImageIcon className="h-4 w-4 mr-1" />
                  <span>Muestras</span>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2 text-gray-900">Muestras</h1>
          <p className="text-gray-500 mt-1">
            Gestión de muestras diarias de alojamientos
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Buscador</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label className="mb-2">Buscar alojamiento</Label>
                <Input 
                  type="search" 
                  placeholder="Buscar por nombre..."
                />
              </div>
              <div className="w-[200px]">
                <Label className="mb-2">Muestra</Label>
                <Select 
                  value={selectedSample} 
                  onValueChange={setSelectedSample}
                >
                  <SelectTrigger>
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
          </CardContent>
        </Card>

        <DailySamplesTable 
          onRegister={(establishment) => {
            setSelectedEstablishment(establishment);
            setShowRegisterForm(true);
          }}
        />

        {showRegisterForm && selectedEstablishment && (
          <DailySamplesRegister
            establishmentName={selectedEstablishment}
            onClose={() => setShowRegisterForm(false)}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Samples;
