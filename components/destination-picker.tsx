import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import searchAirport from "@/hooks/searchAirport";
import { Airport } from "@/hooks/searchAirport";

interface DestinationPickerProps {
  destination: string;
  setDestination: (destination: string) => void;
}

export default function DestinationPicker({ destination, setDestination}: DestinationPickerProps) {
  const [query, setQuery] = useState<string>('');
  const {airports, loading, error } = searchAirport(query);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-14 justify-start pl-12 bg-[#303134] border-0 text-left text-lg font-normal text-white hover:bg-[#3c4043]"
        >
          {destination || "Where to?"}
          <ChevronDown className="ml-auto h-5 w-5 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 bg-[#303134] border-[#5f6368] text-white" align="start">
        <div className="p-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for an airport"
            className="w-full p-2 bg-[#3c4043] text-white rounded"
          />
        </div>
        <div className="space-y-2">
          {airports.map((airport) => (
            <Button
              key={airport.skyId}
              variant="ghost"
              className="w-full justify-start px-4 py-6 hover:bg-[#3c4043]"
              onClick={() => setDestination(airport.presentation.suggestionTitle)}
            >
              <div className="text-left">
                <div className="font-medium">{airport.presentation.suggestionTitle}</div>
                <div className="text-sm text-gray-400">
                {airport.navigation.relevantHotelParams.localizedName}, {airport.presentation.subtitle}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}