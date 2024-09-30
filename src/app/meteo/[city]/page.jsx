"use client";

import { useParams } from 'next/navigation';
import { openweathermap } from '../../../utils/openweathermap';

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
        <div>
            <h1>Météo pour {weatherData.name}</h1>
            <p>1- {weatherData.weather[0].description}</p>
            <p>2- {forecastData.list[0].weather[0].description}</p>
        </div>
    );
}
