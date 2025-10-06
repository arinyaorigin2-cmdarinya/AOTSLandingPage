const ContactHero: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-center bg-black py-16 px-4">
            <section
                className="relative w-full max-w-7xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row 
                items-center justify-between overflow-hidden 
                bg-gray-900 
                shadow-[0_0_15px_rgba(0,183,255,0.35),0_4px_20px_rgba(0,0,0,0.6)]"
            >
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-screen">
                    <img
                        src="/image/aboutUsBackground.png"
                        alt="Grid Background"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* ✅ Glowing light overlay */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div
                        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                        bg-gradient-to-r from-blue-500/30 via-pink-500/25 to-violet-500/30 
                        rounded-full blur-3xl animate-glow-move"
                    />
                </div>

                {/* Left Content */}
                <div className="relative z-20 w-full md:w-1/2 space-y-4 text-center md:text-left mb-8 md:mb-0 pr-0 md:pr-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                        Get in touch with our team to discuss how we can help transform your business.
                        We’re here to help.
                    </p>
                </div>

                {/* Right Content */}
                <div className="relative z-20 w-full md:w-1/2 flex justify-center md:justify-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <img
                            src="/image/contactus.png"
                            alt="Contact Illustration"
                            className="w-full h-full object-contain animate-float"
                        />
                    </div>
                </div>

                {/* Animations */}
                <style>{`
                    @keyframes glow-move {
                        0% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        25% {
                            transform: translate(20%, 15%) rotate(90deg);
                        }
                        50% {
                            transform: translate(40%, 0) rotate(180deg);
                        }
                        75% {
                            transform: translate(20%, -15%) rotate(270deg);
                        }
                        100% {
                            transform: translate(0, 0) rotate(360deg);
                        }
                    }

                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-10px) rotate(2deg);
                        }
                    }

                    .animate-glow-move {
                        animation: glow-move 15s ease-in-out infinite;
                    }

                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                `}</style>
            </section>
        </div>
    );
};

export default ContactHero;
