import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format, parse} from "date-fns";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface DateRange {
  from: string;
  to: string;
}

interface DatePickerProps {
  tripType: string;
  dates: { from: string, to: string };
  setDates: (dates: { from: string, to: string }) => void;
}

export default function DatePicker({ tripType, dates, setDates }: DatePickerProps) {
  const [dateSingle, setDateSingle] = useState<string>()
  const [dateRange, setDateRange] = useState<DateRange | {from: '', to: ''}>({
    from: format(new Date(), 'MM/dd/yyyy'),
    to: format(addDays(new Date(), 7), 'MM/dd/yyyy'),
  })

  const getDateRange = () => {
    return {
      from: dates.from ? parse(dates.from, 'MM/dd/yyyy', new Date()) : undefined,
      to: dates.to ? parse(dates.to, 'MM/dd/yyyy', new Date()) : undefined,
    };
  };

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
            defaultMonth={parse(dates.from, 'MM/dd/yyyy', new Date())}
            selected={getDateRange()}
            // onSelect={(range)=> setDates({from: range?.from, to: range?.to})}
            onSelect={(range) => setDates({ from: format(range?.from || new Date(), 'MM/dd/yyyy'), to: range?.to ? format(range.to, 'MM/dd/yyyy') : '' })}
            // disabled={(date)=> date.getDate()< new Date()}
            styles={{ head_cell : {color: 'white'}, cell: {color: 'white'}, caption_label: {color: 'white'}}}
          />
            :
          <Calendar
            mode="single"
            selected={dates.from.length == 0 ? parse(dates.from, 'MM/dd/yyyy', new Date()) : undefined}
            onSelect={(date) => setDates({from: format(dates.from, 'MM/dd/yyyy'), to: ""})}
            // initialFocus
          />
        }
      </PopoverContent>
    </Popover>
  );
}