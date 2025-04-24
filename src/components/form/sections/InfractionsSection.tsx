
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileIcon } from 'lucide-react';

const InfractionsSection = () => {
  const { register } = useFormContext();

  return (
    <div className="form-group">
      <Label className="form-label flex items-center gap-2">
        <FileIcon size={16} />
        Infracciones
      </Label>
      <Input 
        type="file" 
        {...register('infractions')}
        className="form-file"
      />
    </div>
  );
};

export default InfractionsSection;
