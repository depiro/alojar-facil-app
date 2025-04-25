
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import EstablishmentHeader from '@/components/establishment/EstablishmentHeader';
import EstablishmentSummary from '@/components/establishment/EstablishmentSummary';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { HomeIcon } from 'lucide-react';

const DetailEstablishment = () => {
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
                <BreadcrumbPage>Detalle de Establecimiento</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <EstablishmentHeader />
        <EstablishmentSummary />
      </div>
    </MainLayout>
  );
};

export default DetailEstablishment;
