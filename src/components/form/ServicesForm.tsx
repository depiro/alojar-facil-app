
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  CreditCardIcon, 
  CarIcon, 
  SwimmingPoolIcon, 
  HeartPulseIcon, 
  DumbbellIcon, 
  WifiIcon, 
  CoffeeIcon, 
  UtensilsIcon, 
  RotateCwIcon, 
  CalendarDaysIcon, 
  DogIcon, 
  CircleDotIcon,
} from 'lucide-react';

const ServicesForm = () => {
  const { register, setValue, watch } = useFormContext();

  // Watch values
  const cards = watch('services.cards', 'Ambas');
  const parking = watch('services.parking', 'Playa de estacionamiento');
  const pool = watch('services.pool', 'Al aire libre');
  const spa = watch('services.spa', false);
  const gym = watch('services.gym', false);
  const wifi = watch('services.wifi', true);
  const breakfast = watch('services.breakfast', true);
  const casino = watch('services.casino', false);
  const petsAllowed = watch('services.petsAllowed', true);
  const recreationalSports = watch('services.recreationalSports', 'Cancha de tenis');
  const cafeteriaBar = watch('services.cafeteriaBar', true);
  const restaurant = watch('services.restaurant', true);
  const specialMenus = watch('services.specialMenus', ['Celíacos', 'Vegetarianos']);
  const eventRoom = watch('services.eventRoom', true);
  const eventRoomQty = watch('services.eventRoomQty', '2');
  const eventRoomCapacity = watch('services.eventRoomCapacity', '150');
  const observations = watch('services.observations', 'El hotel cuenta con jardines amplios y zona de juegos infantiles. Se recomienda reservar con anticipación durante temporada alta.');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjetas */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CreditCardIcon size={16} />
            Tarjetas
          </Label>
          <Select defaultValue={cards} onValueChange={(value) => setValue('services.cards', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar opción"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Débito">Débito</SelectItem>
              <SelectItem value="Crédito">Crédito</SelectItem>
              <SelectItem value="Ambas">Ambas</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cochera */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CarIcon size={16} />
            Cochera
          </Label>
          <Select defaultValue={parking} onValueChange={(value) => setValue('services.parking', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar opción"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Techada">Techada</SelectItem>
              <SelectItem value="Playa de estacionamiento">Playa de estacionamiento</SelectItem>
              <SelectItem value="Ambas">Ambas</SelectItem>
              <SelectItem value="No dispone">No dispone</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Piscina */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <SwimmingPoolIcon size={16} />
            Piscina
          </Label>
          <Select defaultValue={pool} onValueChange={(value) => setValue('services.pool', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar opción"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Climatizada">Climatizada</SelectItem>
              <SelectItem value="Techada">Techada</SelectItem>
              <SelectItem value="Al aire libre">Al aire libre</SelectItem>
              <SelectItem value="No dispone">No dispone</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Spa */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <HeartPulseIcon size={16} />
            Spa
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={spa}
              onCheckedChange={(checked) => setValue('services.spa', checked)}
            />
            <span>{spa ? 'Sí' : 'No'}</span>
          </div>
        </div>

        {/* Gimnasio */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <DumbbellIcon size={16} />
            Gimnasio
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={gym}
              onCheckedChange={(checked) => setValue('services.gym', checked)}
            />
            <span>{gym ? 'Sí' : 'No'}</span>
          </div>
        </div>

        {/* WiFi */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <WifiIcon size={16} />
            WiFi
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={wifi}
              onCheckedChange={(checked) => setValue('services.wifi', checked)}
            />
            <span>{wifi ? 'Sí' : 'No'}</span>
          </div>
        </div>

        {/* Desayuno */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CoffeeIcon size={16} />
            Desayuno
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={breakfast}
              onCheckedChange={(checked) => setValue('services.breakfast', checked)}
            />
            <span>{breakfast ? 'Sí' : 'No'}</span>
          </div>
        </div>

        {/* Casino */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CircleDotIcon size={16} />
            Casino
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={casino}
              onCheckedChange={(checked) => setValue('services.casino', checked)}
            />
            <span>{casino ? 'Sí' : 'No'}</span>
          </div>
        </div>

        {/* Admite mascotas */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <DogIcon size={16} />
            Admite mascotas
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={petsAllowed}
              onCheckedChange={(checked) => setValue('services.petsAllowed', checked)}
            />
            <span>{petsAllowed ? 'Sí' : 'No'}</span>
          </div>
        </div>

        {/* Recreativo/Deportivo */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <RotateCwIcon size={16} />
            Recreativo/Deportivo
          </Label>
          <Select 
            defaultValue={recreationalSports} 
            onValueChange={(value) => setValue('services.recreationalSports', value)}
          >
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar opción"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cancha de fútbol">Cancha de fútbol</SelectItem>
              <SelectItem value="Cancha de tenis">Cancha de tenis</SelectItem>
              <SelectItem value="Cancha de pádel">Cancha de pádel</SelectItem>
              <SelectItem value="Sala de juegos">Sala de juegos</SelectItem>
              <SelectItem value="No dispone">No dispone</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cafetería/Bar/Snackbar */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <CoffeeIcon size={16} />
            Cafetería/Bar/Snackbar
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={cafeteriaBar}
              onCheckedChange={(checked) => setValue('services.cafeteriaBar', checked)}
            />
            <span>{cafeteriaBar ? 'Sí' : 'No'}</span>
          </div>
        </div>

        {/* Restaurante */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <UtensilsIcon size={16} />
            Restaurante
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={restaurant}
              onCheckedChange={(checked) => setValue('services.restaurant', checked)}
            />
            <span>{restaurant ? 'Sí' : 'No'}</span>
          </div>
        </div>
      </div>

      {/* Menús especiales */}
      <div className="form-group">
        <Label className="form-label flex items-center gap-2">
          <UtensilsIcon size={16} />
          Menús especiales
        </Label>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="menu-celiacos"
              checked={specialMenus?.includes('Celíacos')}
              onCheckedChange={(checked) => {
                const current = specialMenus || [];
                if (checked) {
                  setValue('services.specialMenus', [...current, 'Celíacos']);
                } else {
                  setValue(
                    'services.specialMenus',
                    current.filter((item) => item !== 'Celíacos')
                  );
                }
              }}
            />
            <Label htmlFor="menu-celiacos" className="cursor-pointer">Celíacos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="menu-veganos"
              checked={specialMenus?.includes('Veganos')}
              onCheckedChange={(checked) => {
                const current = specialMenus || [];
                if (checked) {
                  setValue('services.specialMenus', [...current, 'Veganos']);
                } else {
                  setValue(
                    'services.specialMenus',
                    current.filter((item) => item !== 'Veganos')
                  );
                }
              }}
            />
            <Label htmlFor="menu-veganos" className="cursor-pointer">Veganos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="menu-vegetarianos"
              checked={specialMenus?.includes('Vegetarianos')}
              onCheckedChange={(checked) => {
                const current = specialMenus || [];
                if (checked) {
                  setValue('services.specialMenus', [...current, 'Vegetarianos']);
                } else {
                  setValue(
                    'services.specialMenus',
                    current.filter((item) => item !== 'Vegetarianos')
                  );
                }
              }}
            />
            <Label htmlFor="menu-vegetarianos" className="cursor-pointer">Vegetarianos</Label>
          </div>
        </div>
      </div>

      {/* Salón de eventos */}
      <div className="form-group">
        <div className="flex flex-col space-y-2">
          <Label className="form-label flex items-center gap-2">
            <CalendarDaysIcon size={16} />
            Salón de eventos
          </Label>
          <div className="flex items-center space-x-2 mb-2">
            <Switch
              checked={eventRoom}
              onCheckedChange={(checked) => setValue('services.eventRoom', checked)}
            />
            <span>{eventRoom ? 'Sí' : 'No'}</span>
          </div>
          
          {eventRoom && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6 pt-2">
              <div className="form-group">
                <Label className="form-label">Cantidad de Salones</Label>
                <Input 
                  {...register('services.eventRoomQty')}
                  defaultValue={eventRoomQty}
                  className="form-input"
                  type="number"
                  min="1"
                />
              </div>
              <div className="form-group">
                <Label className="form-label">Capacidad del salón (personas)</Label>
                <Input 
                  {...register('services.eventRoomCapacity')}
                  defaultValue={eventRoomCapacity}
                  className="form-input"
                  type="number"
                  min="1"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Observaciones */}
      <div className="form-group">
        <Label className="form-label">Observaciones</Label>
        <Textarea 
          {...register('services.observations')}
          defaultValue={observations}
          className="form-textarea min-h-[120px]"
        />
      </div>
    </div>
  );
};

export default ServicesForm;
