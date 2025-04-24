
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileIcon } from 'lucide-react';

const InfractionsSection = () => {
  const { register } = useFormContext();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <FileIcon size={16} />
          Documentación
        </Label>
        <Input 
          type="file" 
          {...register('infractions')}
          className="form-file"
        />
      </div>
    </div>
  );
};

export default InfractionsSection;
