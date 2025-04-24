
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPinIcon } from 'lucide-react';

const GeolocationSection = () => {
  const { register, watch } = useFormContext();
  const geolocation = watch('geolocation', '-31.4201, -64.5004');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <MapPinIcon size={16} />
          Geolocalización (links o coordenadas)
        </Label>
        <Input 
          {...register('geolocation')}
          defaultValue={geolocation}
          className="form-input"
          placeholder="https://maps.google.com/?q=..."
          type="url"
        />
      </div>
    </div>
  );
};

export default GeolocationSection;
