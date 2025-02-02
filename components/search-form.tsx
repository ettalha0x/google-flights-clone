"use client"

import { useState } from "react"
import SearchHeader from "./search-header"
import SearchBody from "./search-body"
import { addDays, set } from "date-fns"

export interface Place {
  name?: string;
  SkyId: string;
  EntityId: string;
}

export interface Passenger {
  adults: number;
  children: number;
  infants: number;
}

export interface SearchFormProps {
  tripType: string;
  setTripType: (tripType: string) => void;
  cabinClass: string;
  setCabinClass: (cabinClass: string) => void;
  passengers: Passenger;
  setPassengers: (passengers: Passenger) => void;
  dates: { from: Date | undefined, to: Date | undefined };
  setDates: (dates: { from: Date | undefined, to: Date | undefined }) => void;
  origin: Place;
  setOrigin: (origin: Place) => void;
  destination: Place;
  setDestination: (destination: Place) => void;
}

export default function SearchForm() {
  const [tripType, setTripType] = useState<SearchFormProps['tripType']>("")
  const [cabinClass, setCabinClass] = useState<SearchFormProps['cabinClass']>("")
  const [origin, setOrigin] = useState<Place>({SkyId: "", EntityId: ""})
  const [destination, setDestination] = useState<Place>({SkyId: "", EntityId: ""})
  const [dates, setDates] = useState<{ from: Date | undefined, to: Date | undefined }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const [passengers, setPassengers] = useState<Passenger>({ adults: 1, children: 0, infants: 0 });

  const increment = (label: string) => {
    if (label === 'Adults') setPassengers((prev) => ({ ...prev, adults: prev.adults + 1 }));
    if (label === 'Children' && passengers.adults > 0) setPassengers((prev) => ({ ...prev, children: prev.children + 1 }));
    if (label === 'Infants' && passengers.adults > 0) setPassengers((prev) => ({ ...prev, infants: prev.infants + 1 }));
  }

  const decrement = (label: string) => {
    if (label === 'Adults' && passengers.adults > 0) setPassengers((prev) => ({ ...prev, adults: prev.adults - 1 }));
    if (label === 'Children' && passengers.children > 0) setPassengers((prev) => ({ ...prev, children: prev.children - 1 }));
    if (label === 'Infants' && passengers.infants > 0) setPassengers((prev) => ({ ...prev, infants: prev.infants - 1 }));
  }

  console.log('dates : ', dates);
  return (
    <div className="space-y-4">
      <SearchHeader
        tripType={tripType}
        setTripType={setTripType}
        cabinClass={cabinClass}
        setCabinClass={setCabinClass}
        passengers={passengers}
        setPassengers={setPassengers}
        increment={increment}
        decrement={decrement}
      />

      <SearchBody
        tripType={tripType}
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        dates={dates}
        setDates={setDates}
      />
    </div>
  )
}