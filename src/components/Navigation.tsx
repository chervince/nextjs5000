// components/Navigation.tsx
import Link from 'next/link'

export default function Navigation() {
    return (
        <nav>
            <ul className="flex space-x-4">
                <li><Link href="/" className="hover:text-gray-300">Accueil</Link></li>
                <li><Link href="/events" className="hover:text-gray-300">Événements</Link></li>
                <li><Link href="/about" className="hover:text-gray-300">À propos</Link></li>
                {/* Les liens "Services" et "Contact" sont commentés pour le moment */}
                {/* <li><Link href="/services" className="hover:text-gray-300">Services</Link></li> */}
                {/* <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li> */}
            </ul>
        </nav>
    )
}