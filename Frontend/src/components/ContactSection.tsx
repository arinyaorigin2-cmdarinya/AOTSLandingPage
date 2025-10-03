import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactSection: React.FC = () => {
    const [phone, setPhone] = useState("");

    return (
        <div className="w-full bg-black py-20 px-4 flex justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left - Contact Form */}
                <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
                    <h3 className="text-white text-xl font-semibold mb-6">Send Us a Message</h3>

                    <form className="space-y-4">
                        {/* First & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Company */}
                        <input
                            type="text"
                            placeholder="Company"
                            className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* ✅ Searchable Country Code Dropdown */}
                        <div className="phone-input-wrapper">
                            <PhoneInput
                                country={"in"} // 🇮🇳 Default: India
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                enableSearch={true}
                                searchPlaceholder="Search country..."
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: false,
                                }}
                                containerClass="w-full"
                                inputClass="!w-full !bg-[#2a2a2a] !text-white !border-0 !py-3 !pl-12 !rounded-md !focus:ring-2 !focus:ring-blue-500 placeholder-gray-400"
                                buttonClass="!bg-[#2a2a2a] !border-0 !rounded-l-md"
                                dropdownClass="!bg-[#2a2a2a] !text-white !border !border-gray-700 !rounded-md"
                                searchClass="!bg-[#1f1f1f] !text-white !border !border-gray-700 !rounded-md !px-3 !py-2 placeholder-gray-400 focus:!border-blue-500 focus:!ring-1 focus:!ring-blue-500"
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 text-white font-medium py-3 rounded-md"
                        >
                            Send <Send size={18} />
                        </button>
                    </form>
                </div>

                {/* Right - Contact Information */}
                <div className="flex flex-col space-y-6">
                    {/* Contact Info Box */}
                    <div className="bg-[#1a1a1a] rounded-2xl p-8 space-y-6 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
                        <h3 className="text-white text-xl font-semibold">Contact Information</h3>

                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start gap-3">
                                <Mail className="text-blue-500" size={20} />
                                <div>
                                    <p className="font-medium text-white">Email</p>
                                    <p className="text-gray-400 text-sm">contact@arinyaorigin.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="text-blue-500" size={20} />
                                <div>
                                    <p className="font-medium text-white">Phone</p>
                                    <p className="text-gray-400 text-sm">+91-XXXXXXXXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="text-blue-500" size={20} />
                                <div>
                                    <p className="font-medium text-white">Office</p>
                                    <p className="text-gray-400 text-sm">
                                        Bangalore, Karnataka <br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Book Meeting Box */}
                    <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
                        <h3 className="text-white text-xl font-semibold mb-3">Contact Information</h3>
                        <p className="text-gray-300 text-sm mb-5">
                            Want to discuss your project in detail? Schedule a free 30-minute consultation
                            with our team of experts at{" "}
                            <span className="font-semibold text-white">Arinya Origin Technology Solution</span>.
                            We'll help you understand how our solutions can benefit your business.
                        </p>
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium py-3 rounded-md"
                        >
                            Book a Meeting
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
