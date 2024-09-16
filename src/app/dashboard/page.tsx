"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation"; // Utilisé pour rediriger après la déconnexion

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Récupère les informations de l'utilisateur connecté
        const getUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setUser(session.user);
            } else {
                // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
                router.push("/login");
            }
        };
        getUser();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login"); // Redirection vers la page de login après déconnexion
    };

    if (!user) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Bienvenue, {user.email}</h1>
            <p className="mb-4">Vous êtes connecté.</p>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
                Se déconnecter
            </button>
        </div>
    );
}
