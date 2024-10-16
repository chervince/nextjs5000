//src/components/FirstSection.tsx

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
                    <h1 className="text-4xl  text-gray-600 font-bold mb-4">Bienvenue sur LMV RIDE NC</h1>
                    <h2 className="text-3xl text-gray-600 mb-4">Evenements ride VTT</h2>
                    <h3 className="text-xl text-gray-600 mb-4">Vivez l&apos;adrénaline du VTT Enduro</h3>
                    <p className="text-s text-gray-950 mb-6">Rejoignez notre association dédiée aux passionnés de VTT enduro. Nous organisons des événements inoubliables qui allient sport, nature et convivialité. Que vous soyez débutant ou pilote confirmé, vivez des expériences uniques sur des sentiers exceptionnels.</p>
                    <h3 className="text-xl text-gray-600 mb-4">Événements pour tous les niveaux</h3>
                    <p className="text-s text-gray-950 mb-6">Participez à nos sorties ouvertes à tous les passionnés de VTT, quel que soit votre niveau. Découvrez de nouveaux parcours, améliorez vos compétences et partagez des moments de plaisir en groupe dans une ambiance chaleureuse.</p>
                    <h3 className="text-xl text-gray-600 mb-4">Événements pour pilotes confirmés</h3>
                    <p className="text-s text-gray-950 mb-6">Défiez-vous sur des parcours techniques réservés aux pilotes expérimentés. Repoussez vos limites et vivez des sensations fortes lors de nos événements spécialement conçus pour les riders aguerris.</p>
                    <h3 className="text-xl text-gray-600 mb-4">Rejoignez-nous dès aujourd&apos;hui !</h3>
                    <p className="text-s text-gray-950 mb-6">Inscrivez-vous à nos prochains événements et intégrez une communauté dynamique de passionnés de VTT enduro. Pour plus d&apos;informations, n&apos;hésitez pas à nous contacter.</p>



                </div>
            </div>
        </section>
    );
}
