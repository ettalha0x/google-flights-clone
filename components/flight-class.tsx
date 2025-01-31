import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FlightClassProps {
  cabinClass: string;
  setCabinClass: (cabinClass: string) => void;
}

export default function FlightClass({ cabinClass, setCabinClass }: FlightClassProps) {
  return (
    <Select value={cabinClass} onValueChange={setCabinClass}>
      <SelectTrigger className="w-[140px] bg-[#303134] border-0 text-white">
        <SelectValue placeholder="Cabin class" />
      </SelectTrigger>
      <SelectContent className="bg-[#303134] border-[#5f6368] text-white">
        <SelectItem value="ECONOMY">Economy</SelectItem>
        <SelectItem value="PREMIUM_ECONOMY">Premium Economy</SelectItem>
        <SelectItem value="BUSINESS">Business</SelectItem>
        <SelectItem value="FIRST">First</SelectItem>
      </SelectContent>
    </Select>
  );
}