import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronDown, Info, AlertTriangle } from "lucide-react"
import { SearchFormProps } from "./search-form"
import searchFlights from "@/hooks/searchFlights";

export interface SearchFlightsParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  returnDate?: string;
  cabinClass: string;
  adults: string;
  children?: string;
  infants?: string;
}
export default function FlightResults(tripType: SearchFormProps['tripType'], passengers: SearchFormProps['passengers'],cabinClass: SearchFormProps['cabinClass'], origin: SearchFormProps['origin'], destination: SearchFormProps['destination'], dates: SearchFormProps['dates']) {

  
  const params: SearchFlightsParams = {
    originSkyId: origin?.SkyId,
    destinationSkyId: destination?.SkyId,
    originEntityId: origin?.EntityId,
    destinationEntityId: destination?.EntityId,
    date: dates?.from,
    returnDate: dates?.to,
    cabinClass: cabinClass,
    adults: passengers?.adults.toString(),
  }
  console.log(params);
  // searchFlights(params);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-normal text-white mb-6">Departing flights</h2>

      {/* {mockFlights.map((flight) => (
        <Card key={flight.id} className="bg-[#303134] hover:bg-[#3c4043] border-0 text-white transition-colors">
          <button className="w-full p-4 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 flex-1">
                <div className="w-10 h-10 relative">
                  <Image
                    src={flight.airline.logo || "/flight.svg"}
                    alt={flight.airline.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{`${flight.departure.time} – ${flight.arrival.time}`}</span>
                    {flight.arrival.time.includes(":") &&
                      Number.parseInt(flight.arrival.time) < Number.parseInt(flight.departure.time) && (
                        <span className="text-xs align-super">+1</span>
                      )}
                  </div>
                  <div className="text-sm text-gray-400">
                    {flight.airline.name}
                    {flight.airline.operatedBy && <span className="text-gray-500"> · {flight.airline.operatedBy}</span>}
                  </div>
                </div>

                <div className="text-sm">
                  <div>{flight.duration}</div>
                  <div className="text-gray-400">{`${flight.departure.airport}–${flight.arrival.airport}`}</div>
                </div>

                <div className="text-sm">
                  <div className="flex items-center space-x-1">
                    <span>{`${flight.stops.count} stop`}</span>
                    {Number.parseInt(flight.stops.duration) > 4 * 60 && (
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    )}
                  </div>
                  <div className="text-gray-400">{`${flight.stops.duration} ${flight.stops.airport}`}</div>
                </div>

                <div className="text-sm">
                  <div className="flex items-center space-x-1">
                    <span>{`${flight.emissions.amount} kg CO₂e`}</span>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="text-gray-400">{`+${flight.emissions.percentage}% emissions`}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-lg">{`${flight.price.currency}${flight.price.amount}`}</div>
                  <div className="text-sm text-gray-400">round trip</div>
                </div>
                <ChevronDown className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </button>
        </Card>
      ))} */}
    </div>
  )
}