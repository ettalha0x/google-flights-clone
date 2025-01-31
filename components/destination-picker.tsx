import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface DestinationPickerProps {
  destination: string;
  setDestination: (destination: string) => void;
  airports: { code: string; name: string; city: string }[];
}

export default function DestinationPicker({ destination, setDestination, airports }: DestinationPickerProps) {
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
        <div className="space-y-2">
          {airports.map((airport) => (
            <Button
              key={airport.code}
              variant="ghost"
              className="w-full justify-start px-4 py-6 hover:bg-[#3c4043]"
              onClick={() => setDestination(airport.code)}
            >
              <div className="text-left">
                <div className="font-medium">{airport.city}</div>
                <div className="text-sm text-gray-400">
                  {airport.name} ({airport.code})
                </div>
              </div>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}