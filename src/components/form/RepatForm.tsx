
import React, { useEffect } from 'react';
import { useFormContext } from "react-hook-form";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  BedIcon, 
  BedDoubleIcon, 
  HomeIcon,
  UsersIcon
} from 'lucide-react';

const RepatForm = () => {
  const { register, setValue, watch } = useFormContext();

  // Watch values for room counts
  const singles = watch('repat.singles', '5');
  const doubles = watch('repat.doubles', '15');
  const triples = watch('repat.triples', '8');
  const quadruples = watch('repat.quadruples', '4');
  const quintuples = watch('repat.quintuples', '2');
  const otherSpaces = watch('repat.otherSpaces', '0');
  const additionalBeds = watch('repat.additionalBeds', '5');
  
  // Watch totals
  const totalRooms = watch('repat.totalRooms', '34');
  const totalCapacity = watch('repat.totalCapacity', '73');

  // Function to create number array for select options
  const createNumberArray = (max: number) => {
    return Array.from({ length: max + 1 }, (_, i) => i.toString());
  };

  // Calculate totals
  useEffect(() => {
    const singlesCount = parseInt(singles) || 0;
    const doublesCount = parseInt(doubles) || 0;
    const triplesCount = parseInt(triples) || 0;
    const quadruplesCount = parseInt(quadruples) || 0;
    const quintuplesCount = parseInt(quintuples) || 0;
    const otherSpacesCount = parseInt(otherSpaces) || 0;
    const additionalBedsCount = parseInt(additionalBeds) || 0;

    const totalRoomsCalc = 
      singlesCount + 
      doublesCount + 
      triplesCount + 
      quadruplesCount + 
      quintuplesCount;

    const totalCapacityCalc = 
      singlesCount * 1 + 
      doublesCount * 2 + 
      triplesCount * 3 + 
      quadruplesCount * 4 + 
      quintuplesCount * 5 + 
      otherSpacesCount + 
      additionalBedsCount;

    setValue('repat.totalRooms', totalRoomsCalc.toString());
    setValue('repat.totalCapacity', totalCapacityCalc.toString());
  }, [singles, doubles, triples, quadruples, quintuples, otherSpaces, additionalBeds, setValue]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Singles */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <BedIcon size={16} />
            Singles
          </Label>
          <Select defaultValue={singles} onValueChange={(value) => setValue('repat.singles', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar cantidad"/>
            </SelectTrigger>
            <SelectContent>
              {createNumberArray(50).map(num => (
                <SelectItem key={`singles-${num}`} value={num}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dobles */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <BedDoubleIcon size={16} />
            Dobles
          </Label>
          <Select defaultValue={doubles} onValueChange={(value) => setValue('repat.doubles', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar cantidad"/>
            </SelectTrigger>
            <SelectContent>
              {createNumberArray(50).map(num => (
                <SelectItem key={`doubles-${num}`} value={num}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Triples */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <UsersIcon size={16} />
            Triples
          </Label>
          <Select defaultValue={triples} onValueChange={(value) => setValue('repat.triples', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar cantidad"/>
            </SelectTrigger>
            <SelectContent>
              {createNumberArray(50).map(num => (
                <SelectItem key={`triples-${num}`} value={num}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Cuádruples */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <UsersIcon size={16} />
            Cuádruples
          </Label>
          <Select defaultValue={quadruples} onValueChange={(value) => setValue('repat.quadruples', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar cantidad"/>
            </SelectTrigger>
            <SelectContent>
              {createNumberArray(50).map(num => (
                <SelectItem key={`quadruples-${num}`} value={num}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Quíntuples */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <UsersIcon size={16} />
            Quíntuples
          </Label>
          <Select defaultValue={quintuples} onValueChange={(value) => setValue('repat.quintuples', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar cantidad"/>
            </SelectTrigger>
            <SelectContent>
              {createNumberArray(50).map(num => (
                <SelectItem key={`quintuples-${num}`} value={num}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Otras plazas */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <BedIcon size={16} />
            Otras plazas
          </Label>
          <Select defaultValue={otherSpaces} onValueChange={(value) => setValue('repat.otherSpaces', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar cantidad"/>
            </SelectTrigger>
            <SelectContent>
              {createNumberArray(50).map(num => (
                <SelectItem key={`otherSpaces-${num}`} value={num}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Camas adicionales */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <BedIcon size={16} />
            Camas adicionales
          </Label>
          <Select defaultValue={additionalBeds} onValueChange={(value) => setValue('repat.additionalBeds', value)}>
            <SelectTrigger className="form-select">
              <SelectValue placeholder="Seleccionar cantidad"/>
            </SelectTrigger>
            <SelectContent>
              {createNumberArray(50).map(num => (
                <SelectItem key={`additionalBeds-${num}`} value={num}>{num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Total habitaciones */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <HomeIcon size={16} />
            Total habitaciones
          </Label>
          <Input 
            {...register('repat.totalRooms')}
            value={totalRooms}
            className="form-input bg-gray-100"
            disabled
          />
        </div>

        {/* Total plazas */}
        <div className="form-group">
          <Label className="form-label flex items-center gap-2">
            <HomeIcon size={16} />
            Total plazas
          </Label>
          <Input 
            {...register('repat.totalCapacity')}
            value={totalCapacity}
            className="form-input bg-gray-100"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default RepatForm;
