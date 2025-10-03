import React from "react";


const DigitalSolutionsSection = () => {
    return (
        <>
           
            <div className="w-full h-[90vh] flex items-center justify-center bg-black">

                <section
                    className="relative w-full max-w-7xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row 
             items-center justify-between overflow-hidden 
             bg-gray-900 
             shadow-[0_0_15px_rgba(0,183,255,0.35),0_4px_20px_rgba(0,0,0,0.6)]">



                    {/* Background Grid Image */}
                    <div className="absolute inset-0 z-10 opacity-40 mix-blend-screen">
                        <img
                            src="/image/aboutUsBackground.png"
                            alt="Grid Background"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Moving glowing light - adjusted color */}
                    <div className="absolute inset-0 overflow-hidden z-0">
                        <div
                            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                        bg-gradient-to-r from-cyan-400/30 via-purple-500/25 to-cyan-400/30 
                        rounded-full blur-3xl animate-glow-move"
                        />
                    </div>

                    {/* Left Content */}
                    <div className="relative z-20 w-full md:w-1/2 space-y-4 text-center md:text-left mb-8 md:mb-0 pr-0 md:pr-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            Our Comprehensive{" "}
                            <span className="text-cyan-300">Digital Solutions</span>
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                            At Arinya Origin Technology Solution, we deliver innovative and
                            scalable software solutions designed to enhance efficiency, improve
                            user experiences, and support sustainable business growth. With a
                            focus on quality and innovation, we help businesses stay ahead in
                            the digital era.
                        </p>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative z-20 w-full md:w-1/2 flex justify-center md:justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <img
                                src="/image/tool.png"
                                alt="Digital Solutions Illustration"
                                className="w-full h-full object-contain animate-float"
                            />
                        </div>
                    </div>

                    {/* Custom animations */}
                    <style jsx>{`
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
                        0%,
                        100% {
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
        </>
    );
};

export default DigitalSolutionsSection;
