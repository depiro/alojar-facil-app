
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Star, 
  Pool,
  Wifi,
  ParkingCircle,
  UtensilsCrossed,
  FileText,
  Calendar 
} from 'lucide-react';

const EstablishmentSummary = () => {
  const mockData = {
    legalData: {
      fileNumber: "12345",
      fileUpdateDate: "2024-04-25",
      enablementDate: "2024-01-01",
      lastInspectionDate: "2024-03-15"
    },
    classification: {
      type: "Hotel",
      category: "4 estrellas",
      isTouristicComplex: false,
      segment: "B"
    },
    services: {
      pool: true,
      wifi: true,
      parking: true,
      restaurant: true,
      specialMenus: ["Vegetariano", "Sin TACC"]
    },
    contact: {
      phone: "294-4123456",
      email: "contacto@hotellassierras.com",
      website: "www.hotellassierras.com"
    },
    location: {
      address: "Av. Bustillo 1234",
      city: "San Carlos de Bariloche",
      region: "Cordillera",
      postalCode: "8400"
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Datos Legales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm"><span className="font-medium">Número de legajo:</span> {mockData.legalData.fileNumber}</p>
          <p className="text-sm"><span className="font-medium">Fecha de actualización:</span> {mockData.legalData.fileUpdateDate}</p>
          <p className="text-sm"><span className="font-medium">Fecha de habilitación:</span> {mockData.legalData.enablementDate}</p>
          <p className="text-sm"><span className="font-medium">Última inspección:</span> {mockData.legalData.lastInspectionDate}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Clasificación
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm"><span className="font-medium">Tipo:</span> {mockData.classification.type}</p>
          <p className="text-sm"><span className="font-medium">Categoría:</span> {mockData.classification.category}</p>
          <p className="text-sm"><span className="font-medium">Complejo turístico:</span> {mockData.classification.isTouristicComplex ? 'Sí' : 'No'}</p>
          <p className="text-sm"><span className="font-medium">Segmento:</span> {mockData.classification.segment}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Servicios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <p className="text-sm flex items-center gap-2">
              <Pool className="h-4 w-4" />
              <span className="font-medium">Piscina:</span> {mockData.services.pool ? 'Sí' : 'No'}
            </p>
            <p className="text-sm flex items-center gap-2">
              <Wifi className="h-4 w-4" />
              <span className="font-medium">WiFi:</span> {mockData.services.wifi ? 'Sí' : 'No'}
            </p>
            <p className="text-sm flex items-center gap-2">
              <ParkingCircle className="h-4 w-4" />
              <span className="font-medium">Estacionamiento:</span> {mockData.services.parking ? 'Sí' : 'No'}
            </p>
            <p className="text-sm flex items-center gap-2">
              <UtensilsCrossed className="h-4 w-4" />
              <span className="font-medium">Restaurante:</span> {mockData.services.restaurant ? 'Sí' : 'No'}
            </p>
            <div className="col-span-2">
              <p className="text-sm">
                <span className="font-medium">Menús especiales:</span>{' '}
                {mockData.services.specialMenus.join(', ')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm"><span className="font-medium">Teléfono:</span> {mockData.contact.phone}</p>
          <p className="text-sm"><span className="font-medium">Email:</span> {mockData.contact.email}</p>
          <p className="text-sm"><span className="font-medium">Sitio web:</span> {mockData.contact.website}</p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Ubicación
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm"><span className="font-medium">Dirección:</span> {mockData.location.address}</p>
          <p className="text-sm"><span className="font-medium">Ciudad:</span> {mockData.location.city}</p>
          <p className="text-sm"><span className="font-medium">Región:</span> {mockData.location.region}</p>
          <p className="text-sm"><span className="font-medium">Código Postal:</span> {mockData.location.postalCode}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EstablishmentSummary;
