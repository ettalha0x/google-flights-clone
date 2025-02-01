"use client"

import { useState } from "react"
import SearchHeader from "./search-header"
import SearchBody from "./search-body"
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"

// Mock data for airports
const airports = [
  { code: "TNG", name: "Tangier Ibn Battouta", city: "Tangier, Morocco" },
  { code: "LHR", name: "Heathrow", city: "London, United Kingdom" },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris, France" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas", city: "Madrid, Spain" },
  { code: "BCN", name: "Josep Tarradellas Barcelona-El Prat", city: "Barcelona, Spain" },
]

export default function SearchForm() {
  const [tripType, setTripType] = useState("roundTrip")
  const [cabinClass, setCabinClass] = useState("ECONOMY")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [dates, setDates] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const increment = (label: string) => {
    if (label === 'Adults') setAdults((prev) => prev + 1);
    if (label === 'Children') setChildren((prev) => prev + 1);
    if (label === 'Infants') setInfants((prev) => prev + 1);
  }

  const decrement = (label: string) => {
    if (label === 'Adults' && adults > 0) setAdults((prev) => prev - 1);
    if (label === 'Children' && children > 0) setChildren((prev) => prev - 1);
    if (label === 'Infants' && infants > 0) setInfants((prev) => prev - 1);
  }
console.log('dates : ', dates);
  return (
    <div className="space-y-4">
      <SearchHeader
        tripType={tripType}
        setTripType={setTripType}
        adults={adults}
        children={children}
        infants={infants}
        increment={increment}
        decrement={decrement}
        cabinClass={cabinClass}
        setCabinClass={setCabinClass}
      />

      <SearchBody
        tripType={tripType}
        dates={dates}
        setDates={setDates}
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
      />
    </div>
  )
}