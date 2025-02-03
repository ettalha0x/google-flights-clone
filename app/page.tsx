"use client"
import { Suspense, useState } from "react"
import SearchForm from "@/components/search-form"
import FlightResults from "@/components/flight-results"
import { SearchFormProps } from "@/components/search-form"
import { Place, Passenger } from "@/components/search-form"
import { addDays, format} from "date-fns"


export default function Home() {

  const [tripType, setTripType] = useState<SearchFormProps['tripType']>("")
  const [cabinClass, setCabinClass] = useState<SearchFormProps['cabinClass']>("")
  const [origin, setOrigin] = useState<Place>({SkyId: "", EntityId: ""})
  const [destination, setDestination] = useState<Place>({SkyId: "", EntityId: ""})
  const [dates, setDates] = useState<{ from: string, to: string }>({
    from: format(new Date(), 'MM/dd/yyyy'),
    to: format(addDays(new Date(), 7), 'MM/dd/yyyy'),
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

return (
    <main className="min-h-screen bg-[#202124] text-white">
      <div className="max-w-7xl mx-auto p-4">
        <SearchForm
          tripType={tripType}
          setTripType={setTripType}
          cabinClass={cabinClass}
          setCabinClass={setCabinClass}
          passengers={passengers}
          setPassengers={setPassengers}
          dates={dates}
          setDates={setDates}
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          increment={increment}
          decrement={decrement}
        />
        <br/>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          }
        >
          <FlightResults
            tripType={tripType}
            passengers={passengers}
            cabinClass={cabinClass}
            origin={origin}
            destination={destination}
            dates={dates}
          />
        </Suspense>
      </div>
    </main>
  )
}

