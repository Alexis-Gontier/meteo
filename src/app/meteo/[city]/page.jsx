"use client";

import { useParams } from 'next/navigation';
import { openweathermap } from '../../../utils/openweathermap';
import Square from '../../../components/meteo/test/Square';
import Rectangle from '@/components/meteo/test/Rectangle';
import Grid1 from '../../../components/meteo/test/Grid1';

export default function Page() {

    const { city } = useParams();

    const { weatherData, forecastData, weatherError, forecastError } = openweathermap(city);

    if (weatherError || forecastError) {
        return <div>Aucune ville trouvée pour : "{city}"</div>;
    }
    if (!weatherData || !forecastData) {
        return <div>Chargement des données météo...</div>;
    }

    return (
        <div className='min-h-screen'>
            {/* <h1>Météo pour {weatherData.name}</h1>
            <p>1- {weatherData.weather[0].description}</p>
            <p>2- {forecastData.list[0].weather[0].description}</p>
            <div className='flex flex-col items-center gap-3 max-w-3xl mx-auto'>
                <Square data={weatherData} />
                <Rectangle data={forecastData} />
            </div> */}
            <div className='min-h-screen flex justify-center items-center'>
                <Grid1 data={weatherData} />
            </div>
        </div>
    );
}
