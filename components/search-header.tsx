import TripType from "./trip-type";
import Passengers from "./passengers";
import FlightClass from "./flight-class";

interface SearchHeaderProps {
  tripType: string;
  setTripType: (type: string) => void;
  adults: number;
  children: number;
  infants: number;
  increment: (label: string) => void;
  decrement: (label: string) => void;
  cabinClass: string;
  setCabinClass: (cabinClass: string) => void;
}

export default function SearchHeader({
  tripType,
  setTripType,
  adults,
  children,
  infants,
  increment,
  decrement,
  cabinClass,
  setCabinClass,
}: SearchHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <TripType tripType={tripType} setTripType={setTripType} />
        <Passengers adults={adults} children={children} infants={infants} increment={increment} decrement={decrement} />
        <FlightClass cabinClass={cabinClass} setCabinClass={setCabinClass} />
      </div>
    </div>
  );
}