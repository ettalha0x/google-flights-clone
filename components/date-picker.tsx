import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ChevronDown } from "lucide-react"

interface DatePickerProps {
  tripType: string;
  dates: { startDate: Date | undefined, endDate: Date | undefined };
  setDates: (dates: { startDate: Date | undefined, endDate: Date | undefined }) => void;
}

export default function DatePicker({ tripType, dates, setDates }: DatePickerProps) {
  const formatDateRange = (startDate: Date | undefined, endDate: Date | undefined) => {
    if (startDate && endDate) {
      return `${format(startDate, "EEE, MMM d")} - ${format(endDate, "EEE, MMM d")}`
    } else if (startDate) {
      return format(startDate, "EEE, MMM d")
    } else {
      return "Select dates"
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-14 justify-start pl-12 bg-[#303134] border-0 text-left text-lg font-normal text-white hover:bg-[#3c4043]"
        >
          {formatDateRange(dates.startDate, dates.endDate)}
          <ChevronDown className="ml-auto h-5 w-5 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-[#303134] border-[#5f6368] rounded-lg" align="start">
        <Calendar
          mode={tripType === "roundTrip" ? "range" : "single"}
          selected={tripType === "roundTrip" ? { from: dates.startDate, to: dates.endDate } : dates.startDate}
          onSelect={(selection) => {
            if (tripType === "roundTrip") {
              const { from, to } = selection as { from: Date | undefined, to: Date | undefined }
              setDates({ startDate: from, endDate: to });
            } else {
              setDates({ startDate: selection as Date, endDate: undefined });
            }
          }}
          initialFocus
          className="bg-[#303134] text-white rounded-lg p-4"
          dayClassName={(date) => "hover:bg-[#3c4043] rounded-full"}
        />
      </PopoverContent>
    </Popover>
  );
}