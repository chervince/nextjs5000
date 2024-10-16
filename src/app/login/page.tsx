//src/app/login/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { error } = await supabase.auth.signInWithOtp({ email });

        if (error) {
            setMessage("Erreur lors de la connexion. Veuillez vérifier votre email.");
        } else {
            setMessage("Un lien de connexion a été envoyé à votre email.");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Connexion</h1>
            <p className="mb-4">Veuillez entrer votre adresse email pour vous connecter.</p>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                    Envoyer le lien de connexion
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
}
