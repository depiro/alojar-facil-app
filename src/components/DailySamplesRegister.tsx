
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from 'lucide-react';

interface DailySamplesRegisterProps {
  establishmentName: string;
  onClose: () => void;
}

export const DailySamplesRegister: React.FC<DailySamplesRegisterProps> = ({
  establishmentName,
  onClose,
}) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-primary">
            Registrar Información de "{establishmentName}"
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="establishmentStatus">Estado del Establecimiento *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Abierto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Abierto</SelectItem>
                  <SelectItem value="closed">Cerrado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactMethod">Método de Contacto *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Llamada telefónica" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Llamada telefónica</SelectItem>
                  <SelectItem value="email">Correo electrónico</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="paxLastNight">PAX anoche *</Label>
              <Input type="number" placeholder="Ej. 15" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupiedRooms">Habitaciones ocupadas anoche *</Label>
              <Input type="number" placeholder="Ej. 8" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupancyPercentage">Porcentaje de ocupación</Label>
              <Input type="text" value="Calculado" disabled />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>Fechas especiales</Label>
              <Button variant="outline" size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                Agregar
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Jueves Santo (17/04)</Label>
                <Input placeholder="Reservas / Disponibilidad" />
              </div>
              <div className="space-y-2">
                <Label>Viernes Santo (18/04)</Label>
                <Input placeholder="Reservas / Disponibilidad" />
              </div>
              <div className="space-y-2">
                <Label>Sábado Santo (19/04)</Label>
                <Input placeholder="Reservas / Disponibilidad" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="observations">Observaciones</Label>
            <Textarea 
              placeholder="Ingrese observaciones adicionales..." 
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button>
              Guardar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
