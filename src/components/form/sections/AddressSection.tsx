
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
  const region = watch('address.region', 'Córdoba');
  const locality = watch('address.locality', '');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <MapPinIcon size={18} />
        Domicilio
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <SelectItem value="Villa Carlos Paz">Villa Carlos Paz</SelectItem>
              <SelectItem value="Córdoba">Córdoba</SelectItem>
              <SelectItem value="Villa General Belgrano">Villa General Belgrano</SelectItem>
              <SelectItem value="La Falda">La Falda</SelectItem>
              <SelectItem value="Mina Clavero">Mina Clavero</SelectItem>
              <SelectItem value="Alta Gracia">Alta Gracia</SelectItem>
              <SelectItem value="Río Cuarto">Río Cuarto</SelectItem>
              <SelectItem value="San Francisco">San Francisco</SelectItem>
              <SelectItem value="Villa María">Villa María</SelectItem>
              <SelectItem value="Otra">Otra</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="form-group">
          <Label className="form-label">Región</Label>
          <Input 
            {...register('address.region')}
            defaultValue={region}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
