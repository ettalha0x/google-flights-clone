import OriginPicker from "./origin-picker";
import DestinationPicker from "./destination-picker";
import DatePicker from "./date-picker";
import { Place } from "./search-form";


interface SearchBodyProps {
  tripType: string;
  origin: Place;
  setOrigin: (origin: Place) => void;
  destination: Place;
  setDestination: (destination: Place) => void;
  dates: { from: string, to: string};
  setDates: (dates: { from: string, to: string }) => void;
}

export default function SearchBody({
  tripType,
  origin,
  setOrigin,
  destination,
  setDestination,
  setDates,
  dates,
}: SearchBodyProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <OriginPicker origin={origin} setOrigin={setOrigin}/>
      <DestinationPicker destination={destination} setDestination={setDestination} />
      <DatePicker tripType={tripType} dates={dates} setDates={setDates} />
    </div>
  );
}