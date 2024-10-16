//src/app/events/page.tsx
import React from "react";
import ImageEvent from "@/components/ImageEvent";

const Events: React.FC = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <ImageEvent
                src="/images/nouville_ride_reporte-1080x1080.png"
                width="500px"
                height="500px"
                alt="Description de l'image"
            />
        </div>
    );
};

export default Events;


