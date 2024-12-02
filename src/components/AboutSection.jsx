import React from "react";
import Carousel from "./Carousel";
import TimelinePoint from "./TimelinePoint";

const AboutSection = () => {
    const timelineData = [
        { year: 2023, text: "Founded in April 2023, Dalton aims to transform education...", imgSrc: "/path-to-image1.png" },
        { year: 2024, text: "Expanded partnerships to over 500 institutions...", imgSrc: "/path-to-image2.png" },
        // Add more milestones here
    ];

    return (
        <div className="bg-gradient-to-br from-white to-pink-50 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
                <div className="flex flex-col-reverse md:flex-row items-center">
                    {/* Timeline */}
                    <div className="flex flex-col items-center md:w-1/3">
                        {timelineData.map((point, index) => (
                            <TimelinePoint
                                key={index}
                                year={point.year}
                                text={point.text}
                                isLast={index === timelineData.length - 1}
                            />
                        ))}
                    </div>

                    {/* Carousel */}
                    <div className="md:w-2/3">
                        <Carousel items={timelineData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
