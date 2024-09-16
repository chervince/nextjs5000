"use client";

import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;  // onClick est maintenant optionnel
};

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
            {children}
        </button>
    );
}
