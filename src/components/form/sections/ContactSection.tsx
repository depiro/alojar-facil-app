
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MailIcon, GlobeIcon, PhoneIcon, Instagram, Youtube, Facebook } from 'lucide-react';

const ContactSection = () => {
  const { register, watch } = useFormContext();

  const email = watch('email', 'contacto@hotellassierras.com');
  const website = watch('website', 'www.hotellassierras.com');
  const phone = watch('phone', '+54 351 1234567');
  const whatsapp = watch('whatsapp', '+54 351 1234567');
  const facebook = watch('facebook', 'página de Facebook');
  const instagram = watch('instagram', '@cuentainstagram');
  const youtube = watch('youtube', '@cuentayoutube');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <MailIcon size={18} />
        Contacto
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <Instagram size={16} />
            Instagram
          </Label>
          <Input 
            {...register('instagram')}
            defaultValue={instagram}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <Facebook size={16} />
            Facebook
          </Label>
          <Input 
            {...register('facebook')}
            defaultValue={facebook}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <Youtube size={16} />
            Youtube
          </Label>
          <Input 
            {...register('youtube')}
            defaultValue={youtube}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
