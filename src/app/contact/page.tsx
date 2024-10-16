//src/app/contact/page.tsx
"use client";

import React from "react";
import FormulaireComponent from "@/components/Formulaire"; // Importation du formulaire, renommé pour éviter le conflit

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg mb-6">
                Vous pouvez nous contacter via ce formulaire pour enregistrer vos informations.
            </p>

            {/* Utilisation du composant Formulaire */}
            <FormulaireComponent />

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
                <p>Adresse : 123 Rue des Entreprises, Nouvelle-Calédonie</p>
                <p>Téléphone : +687 123 456</p>
                <p>Email : contact@neithconsulting.com</p>
            </div>
        </div>
    );
}
