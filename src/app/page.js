import Link from 'next/navigation';

export default function Home() {
  return (
    <div>
      <Link hrf="/meteo/montrouge">Meteo: Montrouge</Link>
    </div>
  );
}
