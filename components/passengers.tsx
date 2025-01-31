import Counter from "./counter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PassengersProps {
  adults: number;
  children: number;
  infants: number;
  increment: (label: string) => void;
  decrement: (label: string) => void;
}

export default function Passengers({ adults, children, infants, increment, decrement }: PassengersProps) {
  const passengers = adults + children + infants;

  return (
    <Select>
      <SelectTrigger className="w-[140px] bg-[#303134] border-0 text-white">
        {passengers} Passengers
      </SelectTrigger>
      <SelectContent className="bg-[#303134] border-[#5f6368] text-white">
        <Counter label="Adults" value={adults} increment={() => increment("Adults")} decrement={() => decrement("Adults")} />
        <Counter label="Children" value={children} increment={() => increment("Children")} decrement={() => decrement("Children")} />
        <Counter label="Infants" value={infants} increment={() => increment("Infants")} decrement={() => decrement("Infants")} />
      </SelectContent>
    </Select>
  );
}