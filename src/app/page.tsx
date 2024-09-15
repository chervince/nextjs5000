import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold mb-4">Accueil</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <Image
          src="/images/nouville_ride_reporte-1080x1080.png"
          alt="Visuel Ride Camp"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
