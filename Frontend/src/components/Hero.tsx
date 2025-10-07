import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
    const [displayedTitle, setDisplayedTitle] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const titleWords = ["Empowering", "Businesses", "with", "Software", "Solutions"];
    const typingSpeed = 100;
    const delayBetweenWords = 500;
    const handleBookMeeting = () => {
    window.open("https://forms.gle/ZCrMNodAfu54B7xU9", "_blank");
  };

    useEffect(() => {
        if (currentWordIndex < titleWords.length) {
            const currentWord = titleWords[currentWordIndex];

            if (charIndex < currentWord.length) {
                const timer = setTimeout(() => {
                    setDisplayedTitle((prev) => prev + currentWord[charIndex]);
                    setCharIndex(charIndex + 1);
                }, typingSpeed);

                return () => clearTimeout(timer);
            } else {
                const timer = setTimeout(() => {
                    setDisplayedTitle((prev) => prev + " ");
                    setCurrentWordIndex(currentWordIndex + 1);
                    setCharIndex(0);
                }, delayBetweenWords);

                return () => clearTimeout(timer);
            }
        }
    }, [currentWordIndex, charIndex, titleWords]);

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center overflow-hidden">

            {/* 🌟 Background dotted pattern - final version */}
            <div className="absolute inset-0 opacity-15">
                <div
                    className="absolute top-0 left-0 w-full h-full 
          bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1.2px,transparent_1px)] 
          bg-[length:16px_16px]"
                ></div>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 gap-8">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                        {displayedTitle}
                        {currentWordIndex >= titleWords.length ? (
                            <span className="text-blue-400"></span>
                        ) : (
                            <span className="inline-block w-1 h-8 bg-white ml-1 animate-pulse"></span>
                        )}
                    </h1>

                    <p className="text-gray-300 text-base lg:text-lg max-w-2xl">
                        We design and build intelligent applications using AI, cloud, and
                        modern frameworks to streamline operations, boost productivity, and
                        accelerate digital transformation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <button
                        onClick={handleBookMeeting}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg text-base lg:text-lg transition duration-300 transform hover:scale-105"
                        >
                            Book a Meeting
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center items-center relative">
                    <div className="absolute w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] blur-3xl rounded-full bg-blue-600 opacity-20"></div>
                    <img
                        src="/image/robot-v2.png"
                        alt="AI Robot"
                        className="relative w-[280px] lg:w-[380px] drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
