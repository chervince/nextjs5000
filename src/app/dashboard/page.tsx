"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error) {
                console.error("Erreur lors de la récupération de la session :", error);
                router.push("/login");
                return;
            }

            if (session?.user) {
                setUser(session.user);
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">
                Bienvenue, {user.email ?? 'Utilisateur inconnu'} !
            </h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
