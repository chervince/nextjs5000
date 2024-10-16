// components/Header.tsx
import Logo from './Logo'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    )
}