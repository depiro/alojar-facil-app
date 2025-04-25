
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import AccommodationForm from '@/components/form/AccommodationForm';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { HomeIcon, Building2Icon } from 'lucide-react';

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
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
                <BreadcrumbLink href="/alojamientos">
                  <Building2Icon className="h-4 w-4 mr-1" />
                  <span>Alojamientos</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Nuevo Establecimiento</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2 text-gray-900">Nuevo Establecimiento</h1>
          <p className="text-gray-500 mt-1">
            Complete el formulario para crear un nuevo alojamiento en el sistema
          </p>
        </div>

        <AccommodationForm />
      </div>
    </MainLayout>
  );
};

export default Index;
