
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MailIcon, GlobeIcon, PhoneIcon } from 'lucide-react';

const ContactSection = () => {
  const { register, watch } = useFormContext();

  const email = watch('email', 'contacto@hotellassierras.com');
  const website = watch('website', 'www.hotellassierras.com');
  const phone = watch('phone', '+54 351 1234567');
  const whatsapp = watch('whatsapp', '+54 351 1234567');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <MailIcon size={18} />
        Contacto
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <MailIcon size={16} />
            Correo electrónico
          </Label>
          <Input 
            {...register('email')}
            defaultValue={email}
            className="form-input"
            type="email"
          />
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <GlobeIcon size={16} />
            Página web
          </Label>
          <Input 
            {...register('website')}
            defaultValue={website}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <PhoneIcon size={16} />
            Teléfono
          </Label>
          <Input 
            {...register('phone')}
            defaultValue={phone}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <PhoneIcon size={16} />
            WhatsApp
          </Label>
          <Input 
            {...register('whatsapp')}
            defaultValue={whatsapp}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
