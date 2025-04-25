import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { 
  Card, 
  CardContent, 
  CardFooter
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
import { SaveIcon } from 'lucide-react';

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
        <Card className="w-full">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-4 mb-8">
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
          <CardFooter className="flex justify-between border-t p-6 bg-gray-50">
            <div>
              {activeTab !== 'general' && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevTab}
                >
                  Anterior
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => methods.reset()}
              >
                Restablecer
              </Button>
              {activeTab !== 'repat' ? (
                <Button 
                  type="button" 
                  onClick={nextTab}
                >
                  Siguiente
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90"
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
