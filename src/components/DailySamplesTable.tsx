
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Circle, CircleX, Check, Search, ListIcon } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Buscador</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar establecimiento..." 
                  className="pl-8"
                />
              </div>
            </div>
            <div className="w-[200px]">
              <Label className="form-label flex items-center gap-2 mb-2">
                <ListIcon size={16} />
                Muestra
              </Label>
              <Select defaultValue="2">
                <SelectTrigger className="form-select">
                  <SelectValue placeholder="Seleccionar muestra"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

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
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Items por página</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
