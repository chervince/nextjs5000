import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <h1>Accueil</h1>
        <nav>
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <img src="https://lmvride.nc/wp-content/uploads/2024/04/visuel_web_ride_camp_LMV-finalPlan-de-travail-1-1024x1024.png" alt="Visuel Ride Camp" />
      </div>
    </>
  );
};

export default Home;
