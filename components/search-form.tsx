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
  dates: { from: string, to: string };
  setDates: (dates: { from: string, to: string} ) => void;
  origin: Place;
  setOrigin: (origin: Place) => void;
  destination: Place;
  setDestination: (destination: Place) => void;
  increment: (label: string) => void;
  decrement: (label: string) => void;
}

export default function SearchForm( { tripType, setTripType, cabinClass, setCabinClass, passengers, setPassengers, origin, setOrigin, destination, setDestination, dates, setDates, increment, decrement}: SearchFormProps) {

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