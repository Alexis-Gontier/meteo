import React from 'react'

export default function temp() {
  return (
    <div>
        <p>1°----------------------------</p>
        <p>Ville: {data.name}</p>
        <p>Heure: {currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
        <p>Date: {currentDate.toLocaleDateString('fr-FR')}</p>
        <p>Population: Non disponible</p>

        <p>2°----------------------------</p>
        <p>Température: {Math.round(data.main.temp)}°C</p>
        <p>
            Icon:
            <Image
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                width={50}
                height={50}
            />
        </p>
        <p>Température min: {Math.round(data.main.temp_min)}°C</p>
        <p>Température max: {Math.round(data.main.temp_max)}°C</p>

        <p>3°----------------------------</p>
        <p>Lien 1: <Link href="/meteo/montrouge">Montrouge</Link></p>
        <p>Lien 2: <Link href="/meteo/paris">Paris</Link></p>

        <p>4°----------------------------</p>
        <p>Lever: {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
        <p>Coucher: {new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</p>

        <p>5°----------------------------</p>
        <p>Humidité: {data.main.humidity}%</p>
        <p>Ressentie: {Math.round(data.main.feels_like)}°C</p>
        <p>Pression: {data.main.pressure} hPa</p>
        <p>UV: Non disponible</p>
    </div>
  )
}
