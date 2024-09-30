"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      const formattedCity = city.trim().toLowerCase().replace(/\s+/g, '-');
      router.push(`/meteo/${formattedCity}`);
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
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
}
