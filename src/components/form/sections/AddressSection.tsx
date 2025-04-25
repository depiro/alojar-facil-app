
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPinIcon } from 'lucide-react';

const AddressSection = () => {
  const { register, setValue, watch } = useFormContext();

  const street = watch('address.street', 'Av. San Martín');
  const number = watch('address.number', '1234');
  const floor = watch('address.floor', '');
  const neighborhood = watch('address.neighborhood', 'Centro');
  const region = watch('address.region', 'Jujuy');
  const locality = watch('address.locality', '');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <MapPinIcon size={18} />
        Domicilio
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="form-group">
          <Label className="form-label">Calle</Label>
          <Input 
            {...register('address.street')}
            defaultValue={street}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label">Número</Label>
          <Input 
            {...register('address.number')}
            defaultValue={number}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label">Piso</Label>
          <Input 
            {...register('address.floor')}
            defaultValue={floor}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label">Barrio</Label>
          <Input 
            {...register('address.neighborhood')}
            defaultValue={neighborhood}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label">Localidad</Label>
          <Select 
            value={locality} 
            onValueChange={(value) => setValue('address.locality', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar localidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Abra Pampa">Abra Pampa</SelectItem>
              <SelectItem value="Abralaite">Abralaite</SelectItem>
              <SelectItem value="Casabindo">Casabindo</SelectItem>
              <SelectItem value="León">León</SelectItem>
              <SelectItem value="Lozano">Lozano</SelectItem>
              <SelectItem value="Reyes">Reyes</SelectItem>
              <SelectItem value="San Salvador de Jujuy">San Salvador de Jujuy</SelectItem>
              <SelectItem value="Yala">Yala</SelectItem>
              <SelectItem value="El Carmen">El Carmen</SelectItem>
              <SelectItem value="Monterrico">Monterrico</SelectItem>
              <SelectItem value="Perico">Perico</SelectItem>
              <SelectItem value="Puesto Viejo">Puesto Viejo</SelectItem>
              <SelectItem value="Hipólito Yrigoyen">Hipólito Yrigoyen</SelectItem>
              <SelectItem value="Humahuaca">Humahuaca</SelectItem>
              <SelectItem value="Iturbe">Iturbe</SelectItem>
              <SelectItem value="Tres Cruces">Tres Cruces</SelectItem>
              <SelectItem value="Caimancito">Caimancito</SelectItem>
              <SelectItem value="Calilegua">Calilegua</SelectItem>
              <SelectItem value="Fraile Pintado">Fraile Pintado</SelectItem>
              <SelectItem value="Libertador General San Martín">Libertador General San Martín</SelectItem>
              <SelectItem value="Palpala">Palpalá</SelectItem>
              <SelectItem value="Rinconada">Rinconada</SelectItem>
              <SelectItem value="San Antonio">San Antonio</SelectItem>
              <SelectItem value="La Esperanza">La Esperanza</SelectItem>
              <SelectItem value="La Mendieta">La Mendieta</SelectItem>
              <SelectItem value="San Pedro">San Pedro</SelectItem>
              <SelectItem value="El Fuerte">El Fuerte</SelectItem>
              <SelectItem value="El Piquete">El Piquete</SelectItem>
              <SelectItem value="Santa Clara">Santa Clara</SelectItem>
              <SelectItem value="Cieneguillas">Cieneguillas</SelectItem>
              <SelectItem value="Santa Catalina">Santa Catalina</SelectItem>
              <SelectItem value="Susques">Susques</SelectItem>
              <SelectItem value="Huacalera">Huacalera</SelectItem>
              <SelectItem value="Maimará">Maimará</SelectItem>
              <SelectItem value="Tilcara">Tilcara</SelectItem>
              <SelectItem value="Purmamarca">Purmamarca</SelectItem>
              <SelectItem value="Tumbaya">Tumbaya</SelectItem>
              <SelectItem value="Volcán">Volcán</SelectItem>
              <SelectItem value="San Francisco">San Francisco</SelectItem>
              <SelectItem value="Santa Ana">Santa Ana</SelectItem>
              <SelectItem value="Valle Colorado">Valle Colorado</SelectItem>
              <SelectItem value="Valle Grande">Valle Grande</SelectItem>
              <SelectItem value="La Quiaca">La Quiaca</SelectItem>
              <SelectItem value="Yavi">Yavi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="form-group">
          <Label className="form-label">Región</Label>
          <Input 
            {...register('address.region')}
            className="form-input bg-gray-100"
            defaultValue={region}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
