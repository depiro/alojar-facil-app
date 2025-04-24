
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ListIcon, CalendarIcon } from 'lucide-react';

const StatusSection = () => {
  const { setValue, watch } = useFormContext();

  const status = watch('status', 'Activo');
  const statusDate = watch('statusDate');
  const enablementDate = watch('enablementDate');
  const lastInspectionDate = watch('lastInspectionDate');

  const handleDateSelect = (field: string, date: Date | undefined) => {
    setValue(field, date);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <ListIcon size={16} />
          Estado
        </Label>
        <Select defaultValue={status} onValueChange={(value) => setValue('status', value)}>
          <SelectTrigger className="form-select">
            <SelectValue placeholder="Seleccionar estado"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Activo">Activo</SelectItem>
            <SelectItem value="Cerrado por refacción">Cerrado por refacción</SelectItem>
            <SelectItem value="Cerrado temporalmente">Cerrado temporalmente</SelectItem>
            <SelectItem value="Cerrado definitivamente">Cerrado definitivamente</SelectItem>
            <SelectItem value="En trámite">En trámite</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <CalendarIcon size={16} />
          Fecha estado
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !statusDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {statusDate ? format(statusDate, "PPP", { locale: es }) : "Seleccionar fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={statusDate}
              onSelect={(date) => handleDateSelect('statusDate', date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <CalendarIcon size={16} />
          Fecha de habilitación
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !enablementDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {enablementDate ? format(enablementDate, "PPP", { locale: es }) : "Seleccionar fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={enablementDate}
              onSelect={(date) => handleDateSelect('enablementDate', date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <CalendarIcon size={16} />
          Fecha Última inspección
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !lastInspectionDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {lastInspectionDate ? format(lastInspectionDate, "PPP", { locale: es }) : "Seleccionar fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={lastInspectionDate}
              onSelect={(date) => handleDateSelect('lastInspectionDate', date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default StatusSection;
