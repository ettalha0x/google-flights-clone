import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

interface DatePickerProps {
  tripType: string;
  dates: { from: Date | undefined, to: Date | undefined };
  setDates: (dates: { from: Date | undefined, to: Date | undefined }) => void;
}

export default function DatePicker({ tripType, dates, setDates }: DatePickerProps) {
  const [dateSingle, setDateSingle] = useState<Date>()
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  })

  // useEffect(() => {
  //     if (tripType === 'roundTrip')
  //     {
  //       setDates(
  //       {
  //         startDate: dates.from,
  //         endDate: dates.to
  //       })
  //     }
  //     else
  //     {
  //       setDates({
  //         startDate: dateSingle,
  //         endDate: undefined
  //       })
  //     }
  // }, [dateSingle, dateRange]);
  const formatDateRange = (startDate: Date | undefined, endDate: Date | undefined) => {
    if (startDate && endDate) {
      return `${format(startDate, "EEE, MMM d")} - ${format(endDate, "EEE, MMM d")}`;
    } else if (startDate) {
      return format(startDate, "EEE, MMM d");
    } else {
      return "Select dates";
    }
  };
console.log('dates', dates);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-14 justify-start bg-[#303134] border-0 text-left text-lg font-normal text-white hover:bg-[#3c4043]"
        >
          {
            tripType === "roundTrip" ?
            (dates.from ? (
              dates.to ? (
                <>
                  {format(dates.from, "LLL dd, y")} -{" "}
                  {format(dates.to, "LLL dd, y")}
                </>
              ) : (
                format(dates.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            ))
            :
            (dates.from ? format(dates.from, "PPP") : <span>Pick a date</span>)
          }
          {/* {formatDateRange(dates.startDate, dates.endDate)} */}
          <ChevronDown className="ml-auto h-5 w-5 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-[#303134] border-[#5f6368] rounded-lg" align="start">
        {
          tripType === "roundTrip" ?
          <Calendar
            // initialFocus
            mode="range"
            defaultMonth={dates.from}
            selected={dates}
            onSelect={(range)=> setDates({from: range?.from, to: range?.to})}
            // disabled={(date)=> date.getDate()< new Date()}
            styles={{ head_cell : {color: 'white'}, cell: {color: 'white'}, caption_label: {color: 'white'}}}
          />
            :
            <Calendar
            mode="single"
            selected={dates.from}
            onSelect={(date) => setDates({from: date, to: undefined})}
            // initialFocus
          />
        }
      </PopoverContent>
    </Popover>
  );
}