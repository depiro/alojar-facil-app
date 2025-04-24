
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { FileIcon, CalendarIcon, BuildingIcon } from 'lucide-react';

const LegalDataSection = () => {
  const { register, setValue, watch } = useFormContext();
  
  const fileNumber = watch('fileNumber', '12345');
  const fileUpdateDate = watch('fileUpdateDate');
  const establishmentName = watch('establishmentName', 'Hotel Las Sierras');

  const handleDateSelect = (field: string, date: Date | undefined) => {
    setValue(field, date);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <FileIcon size={18} />
        Datos legales
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <FileIcon size={16} />
            Número de legajo
          </Label>
          <Input 
            {...register('fileNumber')}
            defaultValue={fileNumber}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CalendarIcon size={16} />
            Fecha de actualización de Legajo
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !fileUpdateDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fileUpdateDate ? format(fileUpdateDate, "PPP", { locale: es }) : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={fileUpdateDate}
                onSelect={(date) => handleDateSelect('fileUpdateDate', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <BuildingIcon size={16} />
            Nombre del establecimiento
          </Label>
          <Input 
            {...register('establishmentName')}
            defaultValue={establishmentName}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default LegalDataSection;
