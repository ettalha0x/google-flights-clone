import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const origin = searchParams.get("origin")
  const destination = searchParams.get("destination")
  const date = searchParams.get("date")
  const returnDate = searchParams.get("returnDate")
  const adults = searchParams.get("adults")
  const cabinClass = searchParams.get("cabinClass")

  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originSkyId=${origin}&destinationSkyId=${destination}&date=${date}${returnDate ? `&returnDate=${returnDate}` : ""}&adults=${adults}&cabinClass=${cabinClass}`

  try {
    const response = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY || "",
        "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
      },
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch flights" }, { status: 500 })
  }
}