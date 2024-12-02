import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";

const About = () => {
    const timelineData = [
        {
            year: "2018",
            title: "Company Founded",
            description: "We started our journey with a vision to revolutionize AI learning.",
            images: ["/images/2018_1.jpg", "/images/2018_2.jpg", "/images/2018_3.jpg"], // Replace with actual paths
        },
        {
            year: "2020",
            title: "Milestone Achieved",
            description: "Reached 1 million users worldwide, delivering innovative AI solutions.",
            images: ["/images/2020_1.jpg", "/images/2020_2.jpg", "/images/2020_3.jpg"], // Replace with actual paths
        },
        {
            year: "2022",
            title: "Global Expansion",
            description: "Expanded to 10+ countries, offering localized AI solutions.",
            images: ["/images/2022_1.jpg", "/images/2022_2.jpg", "/images/2022_3.jpg"], // Replace with actual paths
        },
        {
            year: "2024",
            title: "Next-Gen Innovations",
            description: "Launched cutting-edge AI tools with smart automation features.",
            images: ["/images/2024_1.jpg", "/images/2024_2.jpg", "/images/2024_3.jpg"], // Replace with actual paths
        },
    ];

    return (
        <div className="about-page min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200" style={{ position: "relative", paddingTop: "150px"}}>
            {/* Section Title */}
            <h2 className="text-center text-3xl md:text-4xl font-bold mt-8 mb-4 text-gray-800">
                Our Journey Through Time
            </h2>

            {/* Timeline Carousel */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="timeline-swiper"
            >
                {timelineData.map((milestone, index) => (
                    <SwiperSlide key={index} className="flex flex-col lg:flex-row items-center" style={{display: "flex"}}>    
                        {/* Alternate positioning: Content Left or Right */}
                        {index % 2 === 0 ? (
                            <>
                                {/* Collage */}
                                <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center space-y-4">
                                    <div className="relative grid grid-cols-3 gap-2">
                                        {milestone.images.map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                alt={`Milestone ${milestone.year}`}
                                                className="w-full h-40 object-cover rounded-lg transform transition duration-500 hover:scale-105"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800">{milestone.title}</h3>
                                    <p className="mt-2 text-gray-600">{milestone.description}</p>
                                    <p className="mt-4 text-lg font-semibold text-pink-500">{milestone.year}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Content */}
                                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800">{milestone.title}</h3>
                                    <p className="mt-2 text-gray-600">{milestone.description}</p>
                                    <p className="mt-4 text-lg font-semibold text-pink-500">{milestone.year}</p>
                                </div>

                                {/* Collage */}
                                <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center space-y-4">
                                    <div className="relative grid grid-cols-3 gap-2">
                                        {milestone.images.map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                alt={`Milestone ${milestone.year}`}
                                                className="w-full h-40 object-cover rounded-lg transform transition duration-500 hover:scale-105"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default About;
