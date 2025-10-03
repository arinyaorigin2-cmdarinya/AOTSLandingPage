import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="AOTS" className="h-10 w-10" />
                    <span className="font-semibold text-lg tracking-wide">AOTS</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-10 text-base font-medium">
                <Link to="/" className="hover:text-blue-400 transition-colors">
                    Home
                </Link>
                <Link to="/service" className="hover:text-blue-400 transition-colors">
                    Services
                </Link>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                    About Us
                </Link>
            </nav>

            {/* Contact button */}
            <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm md:text-base font-medium transition-colors"
            >
                Contact Us
            </Link>
        </header>
    );
};

export default Navbar;
