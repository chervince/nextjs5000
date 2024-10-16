//src/components/HeroSection.tsx

"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: 'url("/images/header-vtt-1.webp")' }}>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl font-bold text-white mb-4">Prêt à vivre l&apos;aventure du VTT enduro ?</h1>
                <p className="text-lg text-white mb-8">
                    Découvrez nos événements et inscrivez-vous dès maintenant !
                </p>
                <Link href="/contact">
                    <Button>Contactez-nous</Button>
                </Link>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </section>
    );
}
