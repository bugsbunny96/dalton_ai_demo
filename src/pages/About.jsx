import React from "react";
import AboutSection from "../components/AboutSection";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100" style={{ paddingTop: "10px" }}>
            {/* Page Header */}
            <header className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4 pt-20">About Us</h1>
                    <p className="text-lg text-pink-100">
                        Discover the story behind our company and how we're making an impact.
                    </p>
                </div>
            </header>

            {/* About Section - Timeline and Carousel */}
            <AboutSection />

            {/* Additional Sections (if needed) */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Dalton AI, we strive to empower individuals and organizations through innovative AI-driven solutions.
                        Our mission is to make education and learning more accessible, engaging, and impactful for everyone.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
