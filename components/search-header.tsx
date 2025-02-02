import TripType from "./trip-type";
import Passengers from "./passengers";
import FlightClass from "./flight-class";
import { Passenger } from "./search-form";

interface SearchHeaderProps {
  tripType: string;
  setTripType: (type: string) => void;
  cabinClass: string;
  setCabinClass: (cabinClass: string) => void;
  passengers: Passenger;
  setPassengers: (passengers: Passenger) => void;
  increment: (label: string) => void;
  decrement: (label: string) => void;
}

export default function SearchHeader({
  tripType,
  setTripType,
  cabinClass,
  setCabinClass,
  passengers,
  setPassengers,
  increment,
  decrement,
}: SearchHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <TripType tripType={tripType} setTripType={setTripType} />
        <Passengers passengers={passengers} setPassengers={setPassengers} increment={increment} decrement={decrement} />
        <FlightClass cabinClass={cabinClass} setCabinClass={setCabinClass} />
      </div>
    </div>
  );
}