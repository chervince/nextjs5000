"use client";

import React from "react";

export default function SimpleSlider() {
    const slides = [
        "/images/header-vtt-1.webp",
        "/images/shop_page_header_image.webp",
        "/images/shop_page_header_image.webp",
    ];
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    function prevSlide() {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-64 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ backgroundImage: `url(${slide})`, backgroundSize: "cover" }}
                />
            ))}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
}
