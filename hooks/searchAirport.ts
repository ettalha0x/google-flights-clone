import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface Presentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface RelevantFlightParams {
  skyId: string;
  entityId: string;
  flightPlaceType: string;
  localizedName: string;
}

export interface RelevantHotelParams {
  entityId: string;
  entityType: string;
  localizedName: string;
}

export interface Navigation {
  entityId: string;
  entityType: string;
  localizedName: string;
  relevantFlightParams: RelevantFlightParams;
  relevantHotelParams: RelevantHotelParams;
}

export interface Airport {
  skyId: string;
  entityId: string;
  presentation: Presentation;
  navigation: Navigation;
}

export interface SearchAirportResponse {
  status: boolean;
  timestamp: number;
  data: Airport[];
}

const searchAirport = (query: string) => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAirports = useCallback(async () => {
    if (!query || query.length < 3) return;

    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        params: {
          query: query,
          locale: 'en-US'
        },
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
        }
      };

      const response: AxiosResponse<SearchAirportResponse> = await axios.request(options);
      if (response.data.status) {
        setAirports(response.data.data);
      } else {
        setError('Failed to fetch airports');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred');
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    const debounceFetch = setTimeout(fetchAirports, 500); // Wait for 1000ms before making the request

    return () => clearTimeout(debounceFetch); // Clear the timeout if the query changes before the timeout completes
  }, [query, fetchAirports]);

  return { airports, loading, error };
};

export default searchAirport;