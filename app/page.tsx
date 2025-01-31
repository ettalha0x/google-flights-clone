"use client"
import { Suspense, useState } from "react"
import SearchForm from "@/components/search-form"
import FlightResults from "@/components/flight-results"
import { SearchAirportResponse } from "@/hooks/searchAirport"

export default function Home() {
  const [from, setFrom] = useState<SearchAirportResponse>();
  return (
    <main className="min-h-screen bg-[#202124] text-white">
      <div className="max-w-7xl mx-auto p-4">
        <SearchForm />
        <br/>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          }
        >
          <FlightResults />
        </Suspense>
      </div>
    </main>
  )
}

