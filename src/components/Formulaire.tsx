"use client";

import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";  // Assure-toi que ce chemin est correct

export default function Formulaire() {
    // Mise à jour du type pour que 'photo' accepte à la fois File et null
    const [formData, setFormData] = useState<{
        nom: string;
        prenom: string;
        telephone: string;
        photo: File | null; // Autorise à la fois les fichiers et null
    }>({
        nom: "",
        prenom: "",
        telephone: "",
        photo: null,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");  // Pour les messages

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "photo" && files) {
            setFormData({ ...formData, photo: files[0] || null });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");  // Réinitialiser les messages

        try {
            // Log les données du formulaire avant l'envoi
            console.log("Données envoyées :", formData);

            // Upload de la photo sur Supabase Storage (si une photo est sélectionnée)
            let photoUrl = null;
            if (formData.photo) {
                const { data, error } = await supabase.storage
                    .from("photos")
                    .upload(`prospects/${formData.photo.name}`, formData.photo);

                if (error) {
                    console.error("Erreur lors de l'upload de la photo :", error.message);
                    setMessage(`Erreur lors de l'upload : ${error.message}`);
                    return;  // Stopper l'exécution en cas d'erreur d'upload
                }

                photoUrl = data?.path;
            }

            // Log l'URL de la photo avant l'insertion
            console.log("Photo URL :", photoUrl);

            // Insertion des données dans la base de données
            const { error } = await supabase.from("prospects").insert({
                nom: formData.nom,
                prenom: formData.prenom,
                telephone: formData.telephone,
                photo_url: photoUrl,
            });

            if (error) {
                throw error;
            }

            // Réinitialiser le formulaire après soumission
            setFormData({ nom: "", prenom: "", telephone: "", photo: null });
            setMessage("Prospect ajouté avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'ajout du prospect :", error);
            setMessage("Une erreur inconnue est survenue.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                        Nom
                    </label>
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                        Prénom
                    </label>
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                        Téléphone
                    </label>
                    <input
                        type="tel"
                        name="telephone"
                        id="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                        Photo
                    </label>
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/*"
                        onChange={handleChange}
                        className="mt-1 block w-full text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    disabled={loading}
                >
                    {loading ? "En cours..." : "Soumettre"}
                </button>
            </form>

            {message && (
                <p className={`mt-4 ${message.includes("succès") ? "text-green-500" : "text-red-500"}`}>
                    {message}
                </p>
            )}
        </div>
    );
}
