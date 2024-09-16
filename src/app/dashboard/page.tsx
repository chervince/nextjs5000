"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";  // Assure-toi que 'User' est importé correctement

export default function Dashboard() {
    // On indique explicitement que 'user' peut être un 'User' ou 'null'
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                // 'setUser' peut accepter un 'User' ou 'null'
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
        <div>
            <h1>Bienvenue, {user.email} !</h1>
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
