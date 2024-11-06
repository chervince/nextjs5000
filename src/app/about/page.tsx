//src/app/about/page.tsx
import React from "react";

export default function About() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="heading-1 mb-8 text-center">A propos</h1>
                <h2 className="heading-2">Bienvenue le site web de LMV Ride</h2>

                <div>
                    <h2 className="heading-2">Vivez l&apos;adrénaline du VTT Enduro</h2>

                    <p className="paragraph">Rejoignez notre association dédiée aux passionnés de VTT enduro. Nous organisons des événements inoubliables qui allient sport, nature et convivialité. Que vous soyez débutant ou pilote confirmé, vivez des expériences uniques sur des sentiers exceptionnels.</p>
                </div>

                <div>
                    <h3 className="heading-3">Événements pour tous les niveaux</h3>

                    <p className="paragraph">Participez à nos sorties ouvertes à tous les passionnés de VTT, quel que soit votre niveau. Découvrez de nouveaux parcours, améliorez vos compétences et partagez des moments de plaisir en groupe dans une ambiance chaleureuse.</p>
                </div>
                <div>
                    <h3 className="heading-3">Événements pour pilotes confirmés</h3>

                    <p className="paragraph">Défiez-vous sur des parcours techniques réservés aux pilotes expérimentés. Repoussez vos limites et vivez des sensations fortes lors de nos événements spécialement conçus pour les riders aguerris.</p>
                </div>
                <div>
                    <h3 className="heading-3">Rejoignez-nous dès aujourd&apos;hui !</h3>

                    <p className="paragraph">Inscrivez-vous à nos prochains événements et intégrez une communauté dynamique de passionnés de VTT enduro. Pour plus d&apos;informations, n&apos;hésitez pas à nous contacter.</p>
                </div>
            </div>
        </section>
    );
}
