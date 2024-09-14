// app/contact/page.tsx

import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Contact;
