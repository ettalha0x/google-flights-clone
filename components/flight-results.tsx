import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronDown, Info, AlertTriangle } from "lucide-react"

interface Flight {
  id: string
  airline: {
    name: string
    logo: string
    operatedBy?: string
  }
  departure: {
    time: string
    airport: string
  }
  arrival: {
    time: string
    airport: string
  }
  duration: string
  stops: {
    count: number
    duration: string
    airport: string
  }
  emissions: {
    amount: number
    percentage: number
  }
  price: {
    amount: number
    currency: string
  }
}

const mockFlights: Flight[] = [
  {
    id: "1",
    airline: {
      name: "Vueling",
      logo: "/flight.svg?height=40&width=40",
    },
    departure: {
      time: "14:40",
      airport: "TNG",
    },
    arrival: {
      time: "20:05",
      airport: "LHR",
    },
    duration: "5 hrs 25 min",
    stops: {
      count: 1,
      duration: "2 hrs 15 min",
      airport: "BCN",
    },
    emissions: {
      amount: 195,
      percentage: 28,
    },
    price: {
      amount: 166,
      currency: "£",
    },
  },
  {
    id: "2",
    airline: {
      name: "Vueling",
      logo: "/flight.svg?height=40&width=40",
    },
    departure: {
      time: "14:40",
      airport: "TNG",
    },
    arrival: {
      time: "18:45",
      airport: "LGW",
    },
    duration: "4 hrs 5 min",
    stops: {
      count: 1,
      duration: "55 min",
      airport: "BCN",
    },
    emissions: {
      amount: 193,
      percentage: 27,
    },
    price: {
      amount: 174,
      currency: "£",
    },
  },
  {
    id: "3",
    airline: {
      name: "Royal Air Maroc",
      logo: "/flight.svg?height=40&width=40",
      operatedBy: "Operated by Ram Express",
    },
    departure: {
      time: "07:20",
      airport: "TNG",
    },
    arrival: {
      time: "14:45",
      airport: "LGW",
    },
    duration: "8 hrs 25 min",
    stops: {
      count: 1,
      duration: "3 hrs 50 min",
      airport: "CMN",
    },
    emissions: {
      amount: 228,
      percentage: 50,
    },
    price: {
      amount: 268,
      currency: "£",
    },
  },
  {
    id: "4",
    airline: {
      name: "Iberia",
      logo: "/flight.svg?height=40&width=40",
      operatedBy: "Operated by Air Nostrum for Iberia",
    },
    departure: {
      time: "13:25",
      airport: "TNG",
    },
    arrival: {
      time: "08:25",
      airport: "LHR",
    },
    duration: "20 hrs",
    stops: {
      count: 1,
      duration: "16 hrs 5 min",
      airport: "MAD",
    },
    emissions: {
      amount: 196,
      percentage: 29,
    },
    price: {
      amount: 331,
      currency: "£",
    },
  },
]

export default function FlightResults() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-normal text-white mb-6">Departing flights</h2>

      {mockFlights.map((flight) => (
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
      ))}
    </div>
  )
}