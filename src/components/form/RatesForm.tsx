
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit2Icon } from 'lucide-react';

interface Rate {
  id: number;
  roomType: string;
  bathroom: string;
  category: string;
  price: number;
}

const initialRates: Rate[] = [
  { id: 1, roomType: "Habitación Single", bathroom: "Privado", category: "Estándar", price: 35000 },
  { id: 2, roomType: "Habitación Doble", bathroom: "Privado", category: "Estándar", price: 45000 },
  { id: 3, roomType: "Habitación Doble", bathroom: "Privado", category: "Superior", price: 55000 },
  { id: 4, roomType: "Habitación Triple", bathroom: "Privado", category: "Estándar", price: 62000 },
  { id: 5, roomType: "Habitación Cuádruple", bathroom: "Privado", category: "Estándar", price: 78000 },
  { id: 6, roomType: "Suite", bathroom: "Privado", category: "Superior", price: 95000 },
];

const RatesForm = () => {
  const [rates] = useState<Rate[]>(initialRates);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedRate, setSelectedRate] = useState<Rate | null>(null);

  const handleEdit = (rate: Rate) => {
    setSelectedRate(rate);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-md border">
        <div className="bg-gray-50 p-4 border-b">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold">Gestión de Tarifas</h3>
            <div className="flex items-center gap-x-2 text-sm text-gray-600">
              <span>Vigencia de Tarifas: </span>
              <span className="text-red-500">15/12/2024 (Vencidas)</span>
              <span className="text-gray-600">Estado: </span>
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-medium">
                REQUIERE ACTUALIZACIÓN
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Última actualización: 05/09/2024
            </div>
          </div>
        </div>

        <div className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo de Habitación</TableHead>
                <TableHead>Baño</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Tarifa (ARS)</TableHead>
                <TableHead className="w-24">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rates.map((rate) => (
                <TableRow key={rate.id}>
                  <TableCell>{rate.roomType}</TableCell>
                  <TableCell>{rate.bathroom}</TableCell>
                  <TableCell>{rate.category}</TableCell>
                  <TableCell>${rate.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-20 bg-primary text-white hover:bg-primary/90"
                      onClick={() => handleEdit(rate)}
                    >
                      <Edit2Icon className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="p-4 border-t">
            <Button variant="outline" className="gap-2">
              + Agregar Tarifa
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Tarifa</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Tipo de Habitación</Label>
              <Input 
                value={selectedRate?.roomType} 
                readOnly 
                className="bg-gray-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Baño</Label>
                <Input 
                  value={selectedRate?.bathroom} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label>Categoría</Label>
                <Input 
                  value={selectedRate?.category} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Tarifa (ARS)</Label>
              <Input 
                type="number"
                defaultValue={selectedRate?.price}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setIsEditDialogOpen(false)}>
              Guardar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RatesForm;
