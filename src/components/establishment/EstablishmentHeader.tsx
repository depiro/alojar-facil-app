
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Edit, Trash2, Printer, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeactivationDialog from './DeactivationDialog';
import { useToast } from "@/hooks/use-toast";

const EstablishmentHeader = () => {
  const [showDeactivationDialog, setShowDeactivationDialog] = useState(false);
  const { toast } = useToast();

  const handleDeactivation = (data: {
    comments: string;
    date: Date;
    document: File | null;
  }) => {
    // Here you would handle the deactivation logic
    console.log('Deactivation data:', data);
    toast({
      title: "Establecimiento dado de baja",
      description: "El establecimiento ha sido dado de baja exitosamente.",
    });
    setShowDeactivationDialog(false);
  };

  const mockData = {
    name: "Hotel Las Sierras",
    category: "4 estrellas",
    location: "San Carlos de Bariloche",
    region: "Cordillera",
    status: "Activo"
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">{mockData.name}</h1>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Categoría:</span> {mockData.category}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Localidad:</span> {mockData.location}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Región:</span> {mockData.region}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Estado:</span>{' '}
              <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                {mockData.status}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button 
            variant="destructive" 
            size="sm"
            onClick={() => setShowDeactivationDialog(true)}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Baja
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/establecimientos/editar/1">
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <DeactivationDialog
        open={showDeactivationDialog}
        onOpenChange={setShowDeactivationDialog}
        onConfirm={handleDeactivation}
      />
    </Card>
  );
};

export default EstablishmentHeader;
