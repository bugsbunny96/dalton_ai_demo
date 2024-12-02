import React, { useState, useEffect } from "react";
// import "./slider.css";
import Eagle1 from "../assets/images/eagel1.jpg"
import Owl1 from "../assets/images/owl1.jpg"
import crow from "../assets/images/crow.jpg"
import butterfly1 from "../assets/images/butterfly1.jpeg"
import owl2 from "../assets/images/owl2.jpg"
import eagel3 from "../assets/images/eagel3.jpg"
import kingfirser2 from "../assets/images/kingfirser2.jpeg"
import parrot2 from "../assets/images/parrot2.jpg"
import heron from "../assets/images/heron.jpeg"
import butterfly2 from "../assets/images/butterfly2.jpg"

const slides = [
    { image: Eagle1, title: "SLIDER", name: "EAGLE" },
    { image: Owl1, title: "SLIDER", name: "OWL" },
    { image: crow, title: "SLIDER", name: "CROW" },
    { image: butterfly1, title: "SLIDER", name: "BUTTERFLY" },
    { image: owl2, title: "SLIDER", name: "OWL" },
    { image: eagel3, title: "SLIDER", name: "EAGLE" },
    { image: kingfirser2, title: "SLIDER", name: "KINGFISHER" },
    { image: parrot2, title: "SLIDER", name: "PARROT" },
    { image: heron, title: "SLIDER", name: "HERON" },
    { image: butterfly2, title: "SLIDER", name: "BUTTERFLY" },
];

const AnimatedSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 7000); // Auto-slide every 7 seconds
        return () => clearInterval(timer); // Cleanup interval on unmount
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden" style={{ paddingTop: "66px", paddingBottom: "32px" }}>
            {/* Carousel */}
            <div className="w-full h-full relative">
                <div className="flex items-center justify-center h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute w-[180px] h-[250px] rounded-lg shadow-lg bg-cover bg-center transition-all duration-1000 ${index === currentIndex
                                ? "w-full h-full top-0 left-0 z-30"
                                : "opacity-0 scale-90"
                                }`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {index === currentIndex && (
                                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
                                    <h2 className="text-4xl font-bold text-pink-400">{slide.title}</h2>
                                    <h3 className="text-4xl font-bold mt-2">{slide.name}</h3>
                                    <p className="mt-4 text-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Officiis culpa similique consequuntur, reprehenderit dicta
                                        repudiandae.
                                    </p>
                                    <div className="mt-4 flex space-x-4">
                                        <button className="px-4 py-2 bg-gradient-to-r from-orange-400 via-pink-400 to-pink-500 text-white text-lg font-bold rounded hover:opacity-90">
                                            See More
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4" style={{ zIndex: 30 }}>
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-pink-500 text-white text-lg font-bold hover:bg-white hover:text-black"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-pink-500 text-white text-lg font-bold hover:bg-white hover:text-black"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimatedSlider;
