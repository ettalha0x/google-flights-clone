import Counter from "./counter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Passenger } from "./search-form";

interface PassengersProps {
  passengers: Passenger;
  setPassengers: (passengers: Passenger) => void;
  increment: (label: string) => void;
  decrement: (label: string) => void;
}

export default function Passengers({ passengers, setPassengers, increment, decrement }: PassengersProps) {

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;
  return (
    <Select>
      <SelectTrigger className="w-[140px] bg-[#303134] border-0 text-white">
        {totalPassengers} Passengers
      </SelectTrigger>
      <SelectContent className="bg-[#303134] border-[#5f6368] text-white">
        <Counter label="Adults" value={passengers.adults} increment={() => increment("Adults")} decrement={() => decrement("Adults")} />
        <Counter label="Children" value={passengers.children} increment={() => increment("Children")} decrement={() => decrement("Children")} />
        <Counter label="Infants" value={passengers.infants} increment={() => increment("Infants")} decrement={() => decrement("Infants")} />
      </SelectContent>
    </Select>
  );
}