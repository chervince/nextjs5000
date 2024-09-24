"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Inscriptions() {
    const [prospects, setProspects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProspects = async () => {
            const { data, error } = await supabase.from('prospects').select('*');
            if (error) {
                console.error("Erreur lors de la récupération des prospects :", error);
            } else {
                setProspects(data);
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
