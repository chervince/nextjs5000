"use client";  // Assure-toi d'avoir cette directive en haut du fichier

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";  // Import du type 'User'

export default function Dashboard() {
    // On utilise 'SetStateAction' pour permettre l'utilisation de 'User' ou 'null'
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setUser(() => session.user);  // On utilise une fonction pour le setStateAction
            } else {
                router.push("/login");
            }
        };

        checkUser();
    }, [router]);

    if (!user) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            <h1>Bienvenue, {user.email} !</h1>
            <button onClick={async () => {
                await supabase.auth.signOut();
                router.push("/login");
            }}>
                Déconnexion
            </button>
        </div>
    );
}
