
import React from 'react';
import { useFormContext } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  CreditCardIcon, 
  CarIcon, 
  Bath,
  HeartPulseIcon, 
  DumbbellIcon, 
  WifiIcon, 
  CoffeeIcon, 
  UtensilsIcon, 
  RotateCwIcon, 
  CalendarDaysIcon, 
  DogIcon, 
  CircleDotIcon,
  XIcon,
  PlusIcon,
  ToggleRightIcon
} from 'lucide-react';

const ServicesForm = () => {
  const { register, setValue, watch } = useFormContext();

  // Watch values for multi-selects
  const cards = watch('services.cards', []);
  const parking = watch('services.parking', []);
  const pool = watch('services.pool', []);
  const recreationalSports = watch('services.recreationalSports', []);
  const specialMenus = watch('services.specialMenus', []);
  const isAccessible = watch('isAccessible', true);

  // Watch other values
  const spa = watch('services.spa', false);
  const gym = watch('services.gym', false);
  const wifi = watch('services.wifi', true);
  const breakfast = watch('services.breakfast', true);
  const casino = watch('services.casino', false);
  const petsAllowed = watch('services.petsAllowed', true);
  const cafeteriaBar = watch('services.cafeteriaBar', true);
  const restaurant = watch('services.restaurant', true);
  const eventRoom = watch('services.eventRoom', true);
  const eventRoomQty = watch('services.eventRoomQty', '2');
  const eventRoomCapacity = watch('services.eventRoomCapacity', '150');
  const observations = watch('services.observations', 'El hotel cuenta con jardines amplios y zona de juegos infantiles. Se recomienda reservar con anticipación durante temporada alta.');

  // Add new state for event rooms
  const [eventRooms, setEventRooms] = React.useState([{ id: 1 }]);

  const handleAddEventRoom = () => {
    setEventRooms([...eventRooms, { id: eventRooms.length + 1 }]);
  };

  const handleMultiSelect = (field: string, value: string, currentValues: string[]) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setValue(`services.${field}`, newValues);
  };

  return (
    <div className="space-y-6">
      {/* MultiSelect Group */}
      <div className="space-y-6 p-6 border rounded-lg bg-card">
        <h3 className="text-lg font-medium">Servicios Múltiples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjetas */}
          <div className="form-group">
            <Label className="form-label flex items-center gap-2 mb-2">
              <CreditCardIcon size={16} />
              Tarjetas
            </Label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {cards.map((card: string) => (
                  <Badge 
                    key={card}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {card}
                    <button
                      onClick={() => handleMultiSelect('cards', card, cards)}
                      className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                    >
                      <XIcon size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={(value) => handleMultiSelect('cards', value, cards)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar opciones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Débito">Débito</SelectItem>
                  <SelectItem value="Crédito">Crédito</SelectItem>
                  <SelectItem value="American Express">American Express</SelectItem>
                  <SelectItem value="Mastercard">Mastercard</SelectItem>
                  <SelectItem value="Visa">Visa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Cochera */}
          <div className="form-group">
            <Label className="form-label flex items-center gap-2 mb-2">
              <CarIcon size={16} />
              Cochera
            </Label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {parking.map((type: string) => (
                  <Badge 
                    key={type}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {type}
                    <button
                      onClick={() => handleMultiSelect('parking', type, parking)}
                      className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                    >
                      <XIcon size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={(value) => handleMultiSelect('parking', value, parking)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar opciones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Techada">Techada</SelectItem>
                  <SelectItem value="Playa de estacionamiento">Playa de estacionamiento</SelectItem>
                  <SelectItem value="Cubierta">Cubierta</SelectItem>
                  <SelectItem value="Con seguridad">Con seguridad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Piscina */}
          <div className="form-group">
            <Label className="form-label flex items-center gap-2 mb-2">
              <Bath size={16} />
              Piscina
            </Label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {pool.map((type: string) => (
                  <Badge 
                    key={type}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {type}
                    <button
                      onClick={() => handleMultiSelect('pool', type, pool)}
                      className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                    >
                      <XIcon size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={(value) => handleMultiSelect('pool', value, pool)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar opciones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Climatizada">Climatizada</SelectItem>
                  <SelectItem value="Techada">Techada</SelectItem>
                  <SelectItem value="Al aire libre">Al aire libre</SelectItem>
                  <SelectItem value="Con solarium">Con solarium</SelectItem>
                  <SelectItem value="Con guardavidas">Con guardavidas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Recreativo/Deportivo */}
          <div className="form-group">
            <Label className="form-label flex items-center gap-2">
              <RotateCwIcon size={16} />
              Recreativo/Deportivo
            </Label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {recreationalSports.map((sport: string) => (
                  <Badge 
                    key={sport}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {sport}
                    <button
                      onClick={() => handleMultiSelect('recreationalSports', sport, recreationalSports)}
                      className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                    >
                      <XIcon size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={(value) => handleMultiSelect('recreationalSports', value, recreationalSports)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar opciones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cancha de fútbol">Cancha de fútbol</SelectItem>
                  <SelectItem value="Cancha de tenis">Cancha de tenis</SelectItem>
                  <SelectItem value="Cancha de pádel">Cancha de pádel</SelectItem>
                  <SelectItem value="Sala de juegos">Sala de juegos</SelectItem>
                  <SelectItem value="Mesa de ping pong">Mesa de ping pong</SelectItem>
                  <SelectItem value="Mesa de pool">Mesa de pool</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Menús especiales */}
          <div className="form-group">
            <Label className="form-label flex items-center gap-2">
              <UtensilsIcon size={16} />
              Menús especiales
            </Label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {specialMenus.map((menu: string) => (
                  <Badge 
                    key={menu}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {menu}
                    <button
                      onClick={() => handleMultiSelect('specialMenus', menu, specialMenus)}
                      className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                    >
                      <XIcon size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={(value) => handleMultiSelect('specialMenus', value, specialMenus)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar opciones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Celíacos">Celíacos</SelectItem>
                  <SelectItem value="Veganos">Veganos</SelectItem>
                  <SelectItem value="Vegetarianos">Vegetarianos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Switches Group */}
      <div className="space-y-6 p-6 border rounded-lg bg-card">
        <h3 className="text-lg font-medium">Servicios Básicos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

          {/* Accesibilidad */}
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
            <div className="space-y-4 pl-6 pt-2">
              {eventRooms.map((room, index) => (
                <div key={room.id} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="form-group">
                    <Label className="form-label">Nombre del Salon</Label>
                    <Input 
                      {...register(`services.eventRoomQty.${index}`)}
                      className="form-input"
                      type="number"
                      min="1"
                    />
                  </div>
                  <div className="form-group">
                    <Label className="form-label">Capacidad del salón (personas)</Label>
                    <Input 
                      {...register(`services.eventRoomCapacity.${index}`)}
                      className="form-input"
                      type="number"
                      min="1"
                    />
                  </div>
                </div>
              ))}
              
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddEventRoom}
                className="mt-2"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Agregar
              </Button>
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
