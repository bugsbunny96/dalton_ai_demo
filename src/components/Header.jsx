import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl">
            {/* Top Header */}
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-4xl font-bold">
                    <NavLink to="/" className="text-black">
                        Logo
                    </NavLink>
                </div>

                {/* Navigation */}
                <nav className="flex space-x-6 text-gray-800 font-medium">
                    <NavLink
                        to="/about-1"
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive ? "text-pink-500" : "hover:text-pink-500"
                            }`
                        }
                    >
                        About Us 1
                    </NavLink>
                    <NavLink
                        to="/authentication"
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive ? "text-pink-500" : "hover:text-pink-500"
                            }`
                        }
                    >
                        Login/Signup
                    </NavLink>
                    <NavLink
                        to="/about-2"
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive ? "text-pink-500" : "hover:text-pink-500"
                            }`
                        }
                    >
                        About Us 2
                    </NavLink>
                </nav>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Search Icon */}
                    <button className="focus:outline-none">
                        🔍
                    </button>

                    {/* "Talk to Experts" Button */}
                    <NavLink
                        to="/contact"
                        className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        Talk to Experts
                    </NavLink>
                </div>
            </div>

            {/* Bottom Center Section */}
            <div className="absolute left-auto w-full">
                <button
                    onClick={toggleDropdown}
                    className="mx-auto block text-white font-semibold bg-gradient-to-r from-pink-500 to-orange-400 px-9 py-4 rounded-b-2xl items-center shadow-xl"
                >
                    Explore AI Course Finder
                </button>

                {/* Dropdown */}
                {showDropdown && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white shadow-2xl rounded-lg mt-2 px-4 py-2">
                        <div className="flex space-x-9">
                            <NavLink
                                to="/eligibility"
                                className="hover:text-pink-500 text-gray-800"
                                style={{ minWidth: "fit-content", }}
                            >
                                Check Eligibility
                            </NavLink>
                            <NavLink
                                to="/search-program"
                                className="hover:text-pink-500 text-gray-800"
                                style={{ minWidth: "fit-content", }}
                            >
                                Search Program
                            </NavLink>
                            <NavLink
                                to="/search-institute"
                                className="hover:text-pink-500 text-gray-800"
                                style={{ minWidth: "fit-content", }}
                            >
                                Search Institute
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
