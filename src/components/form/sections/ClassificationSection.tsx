
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ToggleRightIcon, ListIcon } from 'lucide-react';

const ClassificationSection = () => {
  const { setValue, watch } = useFormContext();

  const isTouristicComplex = watch('isTouristicComplex', false);
  const type = watch('type', 'Hotel');
  const category = watch('category', '4 estrellas');
  const isAccessible = watch('isAccessible', true);
  const sample = watch('sample', '2');
  const segment = watch('segment', 'B');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <ToggleRightIcon size={16} />
          Es complejo turístico
        </Label>
        <div className="flex items-center space-x-2">
          <Switch
            checked={isTouristicComplex}
            onCheckedChange={(checked) => setValue('isTouristicComplex', checked)}
          />
          <span>{isTouristicComplex ? 'Sí' : 'No'}</span>
        </div>
      </div>

      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <ListIcon size={16} />
          Tipo/Clase
        </Label>
        <Select defaultValue={type} onValueChange={(value) => setValue('type', value)}>
          <SelectTrigger className="form-select">
            <SelectValue placeholder="Seleccionar tipo"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Hotel">Hotel</SelectItem>
            <SelectItem value="Hostería">Hostería</SelectItem>
            <SelectItem value="Apart Hotel">Apart Hotel</SelectItem>
            <SelectItem value="Cabaña">Cabaña</SelectItem>
            <SelectItem value="Hostel">Hostel</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <ListIcon size={16} />
          Categoría
        </Label>
        <Select defaultValue={category} onValueChange={(value) => setValue('category', value)}>
          <SelectTrigger className="form-select">
            <SelectValue placeholder="Seleccionar categoría"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 estrellas">5 estrellas</SelectItem>
            <SelectItem value="4 estrellas">4 estrellas</SelectItem>
            <SelectItem value="3 estrellas">3 estrellas</SelectItem>
            <SelectItem value="2 estrellas">2 estrellas</SelectItem>
            <SelectItem value="1 estrella">1 estrella</SelectItem>
            <SelectItem value="Sin categorizar">Sin categorizar</SelectItem>
          </SelectContent>
        </Select>
      </div>
    
      
      
    {/*     <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <ToggleRightIcon size={16} />
            Accesibilidad
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={isAccessible}
              onCheckedChange={(checked) => setValue('isAccessible', checked)}
            />
            <span>{isAccessible ? 'Accesible' : 'No accesible'}</span>
          </div>
        </div> */}

        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <ListIcon size={16} />
            Muestra
          </Label>
          <Select defaultValue={sample} onValueChange={(value) => setValue('sample', value)}>
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

        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <ListIcon size={16} />
            Segmento
          </Label>
          <Select defaultValue={segment} onValueChange={(value) => setValue('segment', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar segmento"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
              <SelectItem value="D">D</SelectItem>
            </SelectContent>
          </Select>
        </div>
    </div>
  );
};

export default ClassificationSection;
