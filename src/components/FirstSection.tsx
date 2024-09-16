"use client";

import React from "react";
import SimpleSlider from "./SimpleSlider";

export default function FirstSection() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <SimpleSlider />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl  text-gray-600 font-bold mb-4">Neith Consulting</h1>
                    <h2 className="text-xl text-gray-600 mb-4">Experts en Digitalisation des PME</h2>
                    <p className="text-gray-700">
                        Nous aidons les petites et moyennes entreprises à franchir un nouveau cap
                        grâce à des solutions numériques sur mesure. Notre équipe vous accompagne
                        dans la création de sites web, la gestion de réseaux sociaux, et bien plus encore.
                    </p>
                </div>
            </div>
        </section>
    );
}
