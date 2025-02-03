import axios from 'axios';
import { SearchFlightsParams } from '@/components/flight-results';

const searchFlights = (params: SearchFlightsParams) => {

    console.log(params);

    const fetchFlights = async () => {
        try {
            const options = {
                method : 'GET',
                url : 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
                params: {
                    originSkyId: params.originSkyId,
                    destinationSkyId: params.destinationSkyId,
                    originEntityId: params.originEntityId,
                    destinationEntityId: params.destinationEntityId,
                    date: params.date,
                    returnDate: params.returnDate,
                    cabinClass: params.cabinClass,
                    adults: params,
                },
                headers: {
                    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
                    'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
                }
            };
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
};

export default searchFlights;