
import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import GeneralDataForm from './GeneralDataForm';
import ServicesForm from './ServicesForm';
import RepatForm from './RepatForm';
import RatesForm from './RatesForm';
import { ClipboardCheckIcon, SaveIcon } from 'lucide-react';

const AccommodationForm = () => {
  const [activeTab, setActiveTab] = useState('general');
  const methods = useForm({
    defaultValues: {
      // Default values are set in each component
    }
  });

  const onSubmit = (data: any) => {
    console.log('Form data submitted:', data);
    toast.success("Alojamiento creado con éxito", {
      description: "Los datos han sido guardados correctamente.",
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const nextTab = () => {
    if (activeTab === 'general') {
      setActiveTab('services');
    } else if (activeTab === 'services') {
      setActiveTab('rates');
    } else if (activeTab === 'rates') {
      setActiveTab('repat');
    }
  };

  const prevTab = () => {
    if (activeTab === 'repat') {
      setActiveTab('rates');
    } else if (activeTab === 'rates') {
      setActiveTab('services');
    } else if (activeTab === 'services') {
      setActiveTab('general');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-3xl mx-auto sm:p-0 p-2">
          <CardHeader className="bg-gray-50 border-b px-4 py-4 sm:px-6 sm:py-4">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <ClipboardCheckIcon className="h-6 w-6 mr-2 text-primary" />
              <div>
                <CardTitle className="text-2xl">Creación de Alojamiento</CardTitle>
                <CardDescription>
                  Complete la información del nuevo alojamiento
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-6">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8">
                <TabsTrigger value="general">Datos Generales</TabsTrigger>
                <TabsTrigger value="services">Servicios</TabsTrigger>
                <TabsTrigger value="rates">Tarifas</TabsTrigger>
                <TabsTrigger value="repat">Repat</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <GeneralDataForm />
              </TabsContent>
              <TabsContent value="services">
                <ServicesForm />
              </TabsContent>
              <TabsContent value="rates">
                <RatesForm />
              </TabsContent>
              <TabsContent value="repat">
                <RepatForm />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between border-t p-2 sm:p-6 bg-gray-50">
            <div className="w-full sm:w-auto">
              {activeTab !== 'general' && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevTab}
                  className="w-full sm:w-auto"
                >
                  Anterior
                </Button>
              )}
            </div>
            <div className="w-full flex flex-col-reverse gap-2 sm:flex-row sm:w-auto sm:gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => methods.reset()}
                className="w-full sm:w-auto"
              >
                Restablecer
              </Button>
              {activeTab !== 'repat' ? (
                <Button 
                  type="button" 
                  onClick={nextTab}
                  className="w-full sm:w-auto"
                >
                  Siguiente
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                >
                  <SaveIcon className="mr-2 h-4 w-4" />
                  Guardar
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};

export default AccommodationForm;
