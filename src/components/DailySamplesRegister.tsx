
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { CalendarIcon, Plus } from 'lucide-react';
import { cn } from "@/lib/utils";

interface DailySamplesRegisterProps {
  establishmentName: string;
  onClose: () => void;
}

interface SpecialDate {
  id: number;
  date: Date;
  availability: string;
}

export const DailySamplesRegister: React.FC<DailySamplesRegisterProps> = ({
  establishmentName,
  onClose,
}) => {
  const [registrationDate, setRegistrationDate] = useState<Date>(new Date());
  const [specialDates, setSpecialDates] = useState<SpecialDate[]>([]);

  const handleAddSpecialDate = () => {
    const newSpecialDate: SpecialDate = {
      id: Date.now(),
      date: new Date(),
      availability: ''
    };
    setSpecialDates([...specialDates, newSpecialDate]);
  };

  const handleSpecialDateChange = (id: number, field: keyof SpecialDate, value: any) => {
    setSpecialDates(specialDates.map(date => 
      date.id === id ? { ...date, [field]: value } : date
    ));
  };
  const mockData = {
    name: "Hotel Las Sierras",
    category: "4 estrellas",
    location: "Abra Pampa",
    region: "Puna",
    status: "Activo"
  };
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Registrar Información de "{establishmentName}"</h1>
          
              <div className="space-y-1">
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
              <Label>Fecha de muestra *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !registrationDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {registrationDate ? format(registrationDate, "PPP") : <span>Seleccione una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={registrationDate}
                    onSelect={(date) => date && setRegistrationDate(date)}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="paxLastNight">PAX anoche *</Label>
              <Input type="number" placeholder="Ej. 15" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupiedRooms">Habitaciones ocupadas *</Label>
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
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-1"
                onClick={handleAddSpecialDate}
              >
                <Plus className="h-4 w-4" />
                Agregar
              </Button>
            </div>
            <div className="grid grid-col-2 gap-4">
              {specialDates.map((specialDate) => (
                <div key={specialDate.id} className="space-y-0 flex gap-4">
                  <div className="flex-1">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !specialDate.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {specialDate.date ? format(specialDate.date, "PPP") : <span>Seleccione una fecha</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={specialDate.date}
                          onSelect={(date) => date && handleSpecialDateChange(specialDate.id, 'date', date)}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex-1">
                    <Input 
                      placeholder="Reservas / Disponibilidad"
                      value={specialDate.availability}
                      onChange={(e) => handleSpecialDateChange(specialDate.id, 'availability', e.target.value)}
                    />
                  </div>
                </div>
              ))}
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
