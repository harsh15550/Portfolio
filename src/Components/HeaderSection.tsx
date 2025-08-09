import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="px-4 sm:px-[100px] scroll-mt-20 py-4 shadow-md sticky top-0 bg-white z-50">
            <div className="flex justify-between items-center">
                {/* Logo or Name */}
                <h1 className="text-2xl font-bold text-purple-600">Harsh</h1>

                {/* Desktop Navigation */}
                <nav className="space-x-6 font-medium text-gray-700 hidden md:block">
                    <a href="#home" className="hover:text-purple-600 transition">Home</a>
                    <a href="#about" className="hover:text-purple-600 transition duration-300">About</a>
                    <a href="#education" className="hover:text-purple-600 transition">Education</a>
                    <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
                    <a href="#skills" className="hover:text-purple-600 transition">Skills</a>
                    <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-purple-600 focus:outline-none">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown (absolutely positioned, smooth transition) */}
            <div
                onClick={() => setIsMenuOpen(false)}
                className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden z-40 ${isMenuOpen ? "max-h-[500px] py-4 px-4" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col items-center w-full space-y-4 font-medium text-gray-700">
                    <a href="#home" className="hover:text-purple-600 hover:bg-gray-100 w-full text-center py-2 transition duration-300">
                        Home
                    </a>
                    <a href="#about" className="hover:text-purple-600 hover:bg-gray-100 w-full text-center py-2 transition duration-300">
                        About
                    </a>
                    <a href="#education" className="hover:text-purple-600 hover:bg-gray-100 w-full text-center py-2 transition duration-300">
                        Education
                    </a>
                    <a href="#projects" className="hover:text-purple-600 hover:bg-gray-100 w-full text-center py-2 transition duration-300">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-purple-600 hover:bg-gray-100 w-full text-center py-2 transition duration-300">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-purple-600 hover:bg-gray-100 w-full text-center py-2 transition duration-300">
                        Contact
                    </a>
                </div>
            </div>

        </header>
    );
};

export default HeaderSection;
