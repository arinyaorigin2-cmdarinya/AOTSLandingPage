import React from "react";

const AboutUsHeroSection = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center bg-black">
                <section
                    className="relative w-full mt-20 mb-10 max-w-7xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row 
          items-center justify-between overflow-hidden 
          bg-gray-900 
          shadow-[0_0_15px_rgba(0,183,255,0.35),0_4px_20px_rgba(0,0,0,0.6)]"
                >
                    {/* Background Grid Image */}
                    <div className="absolute inset-0 z-10 opacity-40 mix-blend-screen">
                        <img
                            src="/image/aboutUsBackground.png"
                            alt="Grid Background"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* 🌈 Unique Animated Gradient Overlay */}
                    <div className="absolute inset-0 overflow-hidden z-0">
                        <div
                            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
              bg-[linear-gradient(120deg,#06b6d4,#8b5cf6,#ec4899,#3b82f6,#22c55e,#06b6d4)]
              bg-[length:400%_400%]
              rounded-full blur-3xl animate-gradient-flow opacity-30"
                        />
                    </div>

                    {/* Left Content */}
                    <div className="relative z-20 w-full md:w-1/2 space-y-4 text-center md:text-left mb-8 md:mb-0 pr-0 md:pr-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            We’re Engineers of{" "}
                            <span className="text-cyan-300"> Intelligent Change</span>
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                            We engineer intelligent systems that empower enterprises to adapt, innovate, and grow in a fast-changing world.
                            Our solutions fuse intelligence and technology to drive efficiency, resilience, and sustainable growth.
                        </p>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative z-20 w-full md:w-1/2 flex justify-center md:justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <img
                                src="/image/toolnavi.png"
                                alt="Digital Solutions Illustration"
                                className="w-full h-full object-contain animate-float"
                            />
                        </div>
                    </div>

                    {/* ✨ Custom Animations */}
                    <style jsx>{`
            @keyframes gradient-flow {
              0% {
                background-position: 0% 50%;
                transform: rotate(0deg);
              }
              25% {
                background-position: 50% 0%;
                transform: rotate(45deg);
              }
              50% {
                background-position: 100% 50%;
                transform: rotate(90deg);
              }
              75% {
                background-position: 50% 100%;
                transform: rotate(135deg);
              }
              100% {
                background-position: 0% 50%;
                transform: rotate(360deg);
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

            .animate-gradient-flow {
              animation: gradient-flow 18s ease-in-out infinite;
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

export default AboutUsHeroSection;
