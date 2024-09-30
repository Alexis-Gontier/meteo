export default function Square({ data }) {
  const { name, main, weather } = data; // On récupère les infos utiles de l'objet data

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 h-40 w-40 flex flex-col justify-center items-center bg-blue-50">
      {/* Ville */}
      <h2 className="text-lg font-bold mb-2 text-gray-800">{name}</h2>

      {/* Description de la météo */}
      <div className="text-sm text-gray-600 mb-1">
        {weather[0]?.description.charAt(0).toUpperCase() + weather[0]?.description.slice(1)}
      </div>

      {/* Température */}
      <div className="text-xl font-semibold text-blue-600 mb-1">
        {Math.round(main.temp)}°C
      </div>

      {/* Humidité */}
      <div className="text-sm text-gray-500">
        Humidité: {main.humidity}%
      </div>
    </div>
  );
}
