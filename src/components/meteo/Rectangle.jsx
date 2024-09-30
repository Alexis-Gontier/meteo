export default function Rectangle({ data }) {
  const { city, list } = data; // On récupère les informations sur la ville et les prévisions

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-blue-50">
      {/* Afficher le nom de la ville */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{city.name}</h2>

      {/* Affichage des prévisions toutes les 3 heures */}
      <div className="grid grid-cols-4 gap-4">
        {list.map((forecast, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center border p-2 rounded-lg bg-white">
            {/* Date et heure */}
            <p className="text-sm font-semibold text-gray-700">
              {new Date(forecast.dt * 1000).toLocaleDateString('fr-FR', {
                weekday: 'short', day: 'numeric', month: 'short'
              })} à {new Date(forecast.dt * 1000).toLocaleTimeString('fr-FR', {
                hour: '2-digit', minute: '2-digit'
              })}
            </p>

            {/* Icône météo */}
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
              className="h-12 w-12"
            />

            {/* Température */}
            <p className="text-lg font-bold text-blue-600">
              {Math.round(forecast.main.temp)}°C
            </p>

            {/* Description météo */}
            <p className="text-sm text-gray-600">
              {forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
