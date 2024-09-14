// app/accueil/page.tsx

import React from 'react';
import Link from 'next/link';

const Accueil: React.FC = () => {
  return (
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
  );
};

export default Accueil;
