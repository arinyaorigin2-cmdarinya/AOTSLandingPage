import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-300 py-10">
            <div className="border-t border-gray-700 w-full mb-8"></div>
            <div className="max-w-7xl mx-auto px-6">
                {/* Line Break Above Top Section */}


                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center pb-8 mb-8">
                    {/* Logo + Nav */}
                    <div className="flex flex-col lg:flex-row items-center gap-6 mb-6 lg:mb-0">
                        <div className="flex items-center gap-2">
                            <div className="bg-white text-black font-bold px-2 py-1 rounded">
                                AO
                            </div>
                            <span className="font-semibold text-white">
                                Arinya Origin Technology Solution
                            </span>
                        </div>
                        <nav className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="#" className="hover:text-white py-2">Home</a>
                            <a href="#" className="hover:text-white py-2">Services</a>
                            <a href="#" className="hover:text-white py-2">About Us</a>

                        </nav>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md">
                            <FaFacebookF className="text-blue-500" />
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md">
                            <FaTwitter className="text-sky-400" />
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md">
                            <FaLinkedinIn className="text-blue-400" />
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md">
                            <FaInstagram className="text-pink-500" />
                        </a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col lg:flex-row justify-between items-center text-sm gap-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-6 text-gray-400">
                        <div className="flex items-center gap-2 py-2">
                            <MdEmail className="text-blue-500" />
                            <span>contact@arinyaorigin.com</span>
                        </div>
                        <div className="flex items-center gap-2 py-2">
                            <FiPhone className="text-blue-500" />
                            <span>+19-XXXXXXXXXX</span>
                        </div>
                        <div className="flex items-center gap-2 py-2">
                            <MdLocationOn className="text-blue-500" />
                            <span>Bangalore, karnataka-India</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 text-gray-400">
                        <a href="#" className="hover:text-white py-2">Privacy Policy</a>
                        <a href="#" className="hover:text-white py-2">Terms of Service</a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-center text-xs text-gray-500 pt-4  border-gray-800">
                    © 2025 Arinya Origin Technology Solution. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;