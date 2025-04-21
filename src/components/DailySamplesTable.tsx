
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Circle, CircleX, Check } from 'lucide-react';

interface DailySamplesTableProps {
  onRegister: (establishmentName: string) => void;
}

const establishments = [
  {
    id: 1,
    name: "Hotel Los Andes",
    location: "Tilcara",
    phone: "+54 9 388 456 7890",
    status: "open",
    segment: "B",
    sample: "2",
    occupancy: "23 (85%)",
    contacted: true
  },
  {
    id: 2,
    name: "Cabañas Del Monte",
    location: "San Salvador",
    phone: "+54 9 388 555 2233",
    status: "open",
    segment: "B",
    sample: "2",
    occupancy: "18 (90%)",
    contacted: true
  },
  {
    id: 3,
    name: "Hosteria Coquena",
    location: "Purmamarca",
    phone: "+54 9 388 445 6677",
    status: "open",
    segment: "B",
    sample: "2",
    occupancy: "--",
    contacted: false
  }
];

export const DailySamplesTable: React.FC<DailySamplesTableProps> = ({ onRegister }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-9"></TableHead>
            <TableHead>Establecimiento</TableHead>
            <TableHead>Localidad</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>PAX Anoche</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {establishments.map((establishment) => (
            <TableRow key={establishment.id}>
              <TableCell>
                {establishment.contacted ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <CircleX className="h-5 w-5 text-red-500" />
                )}
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{establishment.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Segmento {establishment.segment} | Muestra {establishment.sample}
                  </p>
                </div>
              </TableCell>
              <TableCell>{establishment.location}</TableCell>
              <TableCell>{establishment.phone}</TableCell>
              <TableCell>
                <Badge variant={establishment.status === 'open' ? 'success' : 'destructive'} className="bg-green-100 text-green-800">
                  {establishment.status === 'open' ? 'Abierto' : 'Cerrado'}
                </Badge>
              </TableCell>
              <TableCell>{establishment.occupancy}</TableCell>
              <TableCell>
                {!establishment.contacted ? (
                  <Button 
                    variant="default"
                    onClick={() => onRegister(establishment.name)}
                  >
                    Registrar
                  </Button>
                ) : (
                  <Button variant="outline">Ver detalles</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
