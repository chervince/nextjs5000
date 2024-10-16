//src/components/ImageEvent.tsx

import React from 'react';

interface ImageEventProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
}

const ImageEvent: React.FC<ImageEventProps> = ({ src = "/images/nouville_ride_reporte-1080x1080.png", alt = 'event_2024', width = '1080px', height = '1080px' }) => {
    return (
        <div
            style={{
                width: width,
                height: height,
                margin: '0 auto', // Centre horizontalement
                overflow: 'hidden',
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </div>
    );
};

export default ImageEvent;
