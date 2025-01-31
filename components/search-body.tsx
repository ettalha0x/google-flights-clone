import OriginPicker from "./origin-picker";
import DestinationPicker from "./destination-picker";
import DatePicker from "./date-picker";

interface SearchBodyProps {
  tripType: string;
  dates: { startDate: Date | undefined, endDate: Date | undefined };
  setDates: (dates: { startDate: Date | undefined, endDate: Date | undefined }) => void;
  origin: string;
  setOrigin: (origin: string) => void;
  destination: string;
  setDestination: (destination: string) => void;
}

export default function SearchBody({
  tripType,
  dates,
  setDates,
  origin,
  setOrigin,
  destination,
  setDestination,
}: SearchBodyProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <OriginPicker origin={origin} setOrigin={setOrigin}/>
      <DestinationPicker destination={destination} setDestination={setDestination} />
      <DatePicker tripType={tripType} dates={dates} setDates={setDates} />
    </div>
  );
}