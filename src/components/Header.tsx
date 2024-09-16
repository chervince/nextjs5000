"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div>
                    <Link href="/" className="text-2xl font-bold">
                        Neith Consulting
                    </Link>
                </div>
                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-gray-400">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400">
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
