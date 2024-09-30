"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [city, setCity] = useState(''); // Pour stocker la valeur de la ville
  const router = useRouter(); // Pour la navigation dynamique

  const handleSearch = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    if (city) {
      router.push(`/meteo/${city.toLowerCase()}`); // Redirection dynamique vers /meteo/[ville]
    }
  };

  return (
    <div>
      <h1>Rechercher la météo</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Entrez le nom de la ville"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Mettre à jour la ville
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
}
