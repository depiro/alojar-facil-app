
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  FileIcon, 
  CalendarIcon, 
  BuildingIcon, 
  MapPinIcon, 
  MailIcon, 
  GlobeIcon, 
  PhoneIcon, 
  UserIcon, 
  ToggleRightIcon, 
  ListIcon,
  BadgeIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const GeneralDataForm = () => {
  const { register, setValue, watch } = useFormContext();

  // Watch values
  const fileNumber = watch('fileNumber', '12345');
  const fileUpdateDate = watch('fileUpdateDate');
  const establishmentName = watch('establishmentName', 'Hotel Las Sierras');
  const isTouristicComplex = watch('isTouristicComplex', false);
  const type = watch('type', 'Hotel');
  const category = watch('category', '4 estrellas');
  const street = watch('address.street', 'Av. San Martín');
  const number = watch('address.number', '1234');
  const floor = watch('address.floor', '');
  const neighborhood = watch('address.neighborhood', 'Centro');
  const locality = watch('address.locality', 'Villa Carlos Paz');
  const region = watch('address.region', 'Córdoba');
  const geolocation = watch('geolocation', '-31.4201, -64.5004');
  const email = watch('email', 'contacto@hotellassierras.com');
  const website = watch('website', 'www.hotellassierras.com');
  const phone = watch('phone', '+54 351 1234567');
  const whatsapp = watch('whatsapp', '+54 351 1234567');
  const ownerName = watch('ownerName', 'Juan Pérez');
  const cuit = watch('cuit', '20-12345678-9');
  const status = watch('status', 'Activo');
  const statusDate = watch('statusDate');
  const enablementDate = watch('enablementDate');
  const lastInspectionDate = watch('lastInspectionDate');
  const isAccessible = watch('isAccessible', true);
  const sample = watch('sample', '2');
  const segment = watch('segment', 'B');

  const handleDateSelect = (field: string, date: Date | undefined) => {
    setValue(field, date);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Número de legajo */}
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

        {/* Fecha de actualización de Legajo */}
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

        {/* Nombre del establecimiento */}
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

        {/* Es complejo turístico */}
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

        {/* Tipo/Clase */}
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

        {/* Categoría */}
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
      </div>

      {/* Domicilio */}
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
            <Input 
              {...register('address.locality')}
              defaultValue={locality}
              className="form-input"
            />
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

      {/* Geolocalización */}
      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <MapPinIcon size={16} />
          Geolocalización (coordenadas)
        </Label>
        <Input 
          {...register('geolocation')}
          defaultValue={geolocation}
          className="form-input"
          placeholder="Latitud, Longitud"
        />
      </div>

      {/* Contacto */}
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

      {/* Titular */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Estado y fechas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <ListIcon size={16} />
            Estado
          </Label>
          <Select defaultValue={status} onValueChange={(value) => setValue('status', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar estado"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Activo">Activo</SelectItem>
              <SelectItem value="Cerrado por refacción">Cerrado por refacción</SelectItem>
              <SelectItem value="Cerrado temporalmente">Cerrado temporalmente</SelectItem>
              <SelectItem value="Cerrado definitivamente">Cerrado definitivamente</SelectItem>
              <SelectItem value="En trámite">En trámite</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CalendarIcon size={16} />
            Fecha estado
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !statusDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {statusDate ? format(statusDate, "PPP", { locale: es }) : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={statusDate}
                onSelect={(date) => handleDateSelect('statusDate', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CalendarIcon size={16} />
            Fecha de habilitación
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !enablementDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {enablementDate ? format(enablementDate, "PPP", { locale: es }) : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={enablementDate}
                onSelect={(date) => handleDateSelect('enablementDate', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CalendarIcon size={16} />
            Fecha Última inspección
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !lastInspectionDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {lastInspectionDate ? format(lastInspectionDate, "PPP", { locale: es }) : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={lastInspectionDate}
                onSelect={(date) => handleDateSelect('lastInspectionDate', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Atributos adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="form-group">
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
        </div>
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
              <SelectItem value="1W">1W</SelectItem>
              <SelectItem value="2W">2W</SelectItem>
              <SelectItem value="3W">3W</SelectItem>
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

      {/* Infracciones */}
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
    </div>
  );
};

export default GeneralDataForm;
