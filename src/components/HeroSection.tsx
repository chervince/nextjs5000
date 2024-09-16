"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: 'url("/images/shop_page_header_image.webp")' }}>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl font-bold text-white mb-4">Transformez votre entreprise avec Neith Consulting</h1>
                <p className="text-lg text-white mb-8">
                    Grâce à notre expertise en digitalisation, nous vous aidons à atteindre de nouveaux sommets
                    et à maximiser votre potentiel. Ensemble, construisons un avenir pour votre entreprise.
                </p>
                <Link href="/contact">
                    <Button>Contactez-nous</Button>
                </Link>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </section>
    );
}
