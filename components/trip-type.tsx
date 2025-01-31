import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TripTypeProps {
  tripType: string;
  setTripType: (type: string) => void;
}

export default function TripType({ tripType, setTripType }: TripTypeProps) {
  return (
    <Select value={tripType} onValueChange={setTripType}>
      <SelectTrigger className="w-[140px] bg-[#303134] border-0 text-white">
        <SelectValue placeholder="Trip type" />
      </SelectTrigger>
      <SelectContent className="bg-[#303134] border-[#5f6368] text-white">
        <SelectItem value="roundTrip">Round trip</SelectItem>
        <SelectItem value="oneWay">One way</SelectItem>
      </SelectContent>
    </Select>
  );
}