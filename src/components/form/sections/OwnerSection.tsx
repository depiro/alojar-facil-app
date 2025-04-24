
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MailIcon, UserIcon, BadgeIcon } from 'lucide-react';

const OwnerSection = () => {
  const { register, watch } = useFormContext();

  const ownerName = watch('ownerName', 'Juan Pérez');
  const cuit = watch('cuit', '20-12345678-9');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <MailIcon size={18} />
        Titular
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <UserIcon size={16} />
            Nombre del titular
          </Label>
          <Input 
            {...register('ownerName')}
            defaultValue={ownerName}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <BadgeIcon size={16} />
            CUIT
          </Label>
          <Input 
            {...register('cuit')}
            defaultValue={cuit}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;
