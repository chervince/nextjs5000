"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";  // Import du type 'User'

export default function Dashboard() {
    // Utilisation de 'Partial<User>' pour permettre des propriétés partielles
    const [user, setUser] = useState<Partial<User> | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            // Si 'session.user' existe, on l'assigne au state
            if (session?.user) {
                setUser(session.user);  // Typage de l'utilisateur avec 'Partial<User>'
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
            <h1>Bienvenue, {user.email ?? 'Utilisateur inconnu'} !</h1>
            <button
                onClick={async () => {
                    await supabase.auth.signOut();
                    router.push("/login");
                }}
            >
                Déconnexion
            </button>
        </div>
    );
}
