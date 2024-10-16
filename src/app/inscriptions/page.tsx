//src/app/inscriptions/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

// Définir le type pour les prospects (ajuste selon la structure réelle de la table)
interface Prospect {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
}

export default function Inscriptions() {
    // Utiliser le type Prospect[] pour initialiser le state
    const [prospects, setProspects] = useState<Prospect[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProspects = async () => {
            const { data, error } = await supabase.from('prospects').select('*');

            if (error) {
                console.error("Erreur lors de la récupération des prospects :", error);
            } else {
                // Utiliser as Prospect[] pour typer les données
                setProspects(data as Prospect[]);
            }

            setLoading(false);
        };

        fetchProspects();
    }, []);

    if (loading) {
        return <p>Chargement des inscriptions...</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Liste des Inscriptions</h1>
            <table className="min-w-full bg-black">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nom</th>
                        <th className="py-2 px-4 border-b">Prénom</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Téléphone</th>
                    </tr>
                </thead>
                <tbody>
                    {prospects.map((prospect) => (
                        <tr key={prospect.id}>
                            <td className="py-2 px-4 border-b">{prospect.nom}</td>
                            <td className="py-2 px-4 border-b">{prospect.prenom}</td>
                            <td className="py-2 px-4 border-b">{prospect.email}</td>
                            <td className="py-2 px-4 border-b">{prospect.telephone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
