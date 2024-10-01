import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => {
    if (!res.ok) throw new Error('Erreur lors de la récupération des données');
    return res.json();
});


export function openweathermap(city) {

    const apiKey = '';

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    const { data: weatherData, error: weatherError } = useSWR(weatherUrl, fetcher);
    const { data: forecastData, error: forecastError } = useSWR(forecastUrl, fetcher);

    return {
        // data:
        weatherData,
        forecastData,
        // error:
        weatherError,
        forecastError,
    };
}
