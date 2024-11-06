//src/app/events/page.tsx
import React from "react";
import ImageEvent from "@/components/ImageEvent";

const Events: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Événements LMV Ride</h1>
            <ImageEvent
                src="/images/nouville_ride_reporte-1080x1080.png"
                width="60%"
                height="60%"
                alt="Description de l'image"
            />
        </div>
    );
};

export default Events;


