import { useState } from 'react';

interface StoryCard {
    id: number;
    content: string;
    author: string;
    position: string;
}

const WhyWeStarted: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number>(0);

    const storyCards: StoryCard[] = [
        {
            id: 0,
            content: "We saw businesses drowning in data but struggling to make sense of it. Decisions were slow, teams were overwhelmed, and insights were buried.",
            author: "Preethi Gowda",
            position: "Founder & CEO"
        },
        {
            id: 1,
            content: "That's when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
            author: "Preethi Gowda",
            position: "Founder & CEO"
        },
        {
            id: 2,
            content: "So we built a platform that empowers companies to transform raw data into real-time decisions using the power system.",
            author: "Preethi Gowda",
            position: "Founder & CEO"
        }
    ];

    const handleCardClick = (id: number) => {
        setActiveCard(id);
    };

    return (
        <section className="w-full min-h-screen bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why We Started
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Cards Selector */}
                    <div className="lg:w-2/5 flex lg:flex-col gap-6">
                        {storyCards.map((card, index) => (
                            <button
                                key={card.id}
                                onClick={() => handleCardClick(card.id)}
                                className={`flex-shrink-0 lg:w-full p-6 rounded-2xl border-2 transition-all duration-500 ease-in-out transform hover:scale-102 hover:shadow-2xl ${activeCard === card.id
                                        ? 'border-blue-500 bg-gradient-to-br from-gray-900 to-black shadow-2xl scale-102'
                                        : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                                    }`}
                            >
                                <div className="text-left">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div
                                            className={`w-4 h-4 rounded-full transition-all duration-300 ${activeCard === card.id ? 'scale-110 bg-blue-500' : 'scale-100 bg-gray-700'
                                                }`}
                                        ></div>
                                        <span
                                            className={`font-semibold text-lg transition-colors duration-300 ${activeCard === card.id ? 'text-blue-400' : 'text-gray-400'
                                                }`}
                                        >
                                            {index === 0 && 'The Problem'}
                                            {index === 1 && 'The Insight'}
                                            {index === 2 && 'The Solution'}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-left">
                                        {card.content}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Card Display */}
                    <div className="lg:w-3/5 relative">
                        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-800 min-h-[400px] flex items-center">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r from-blue-500 to-emerald-500"></div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10 w-full">
                                <div className="mb-10">
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-6"></div>
                                    <p className="text-2xl md:text-3xl text-white leading-relaxed font-light italic">
                                        "{storyCards[activeCard].content}"
                                    </p>
                                </div>

                                <div className="border-t border-gray-800 pt-8">
                                    <p className="text-xl font-semibold text-white mb-1">
                                        {storyCards[activeCard].author}
                                    </p>
                                    <p className="text-blue-400 font-medium">
                                        {storyCards[activeCard].position}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="absolute bottom-8 right-8 flex gap-3">
                                <button
                                    onClick={() => setActiveCard(prev => prev > 0 ? prev - 1 : storyCards.length - 1)}
                                    className="w-12 h-12 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                                >
                                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setActiveCard(prev => prev < storyCards.length - 1 ? prev + 1 : 0)}
                                    className="w-12 h-12 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                                >
                                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-3 mt-8">
                            {storyCards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCard(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-500 ${activeCard === index
                                            ? 'scale-125 bg-gradient-to-r from-blue-500 to-emerald-500'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                    style={{
                                        width: activeCard === index ? '1.5rem' : '0.75rem'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Progress Bar */}
                <div className="lg:hidden mt-8">
                    <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${((activeCard + 1) / storyCards.length) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>Step {activeCard + 1} of {storyCards.length}</span>
                        <span>{Math.round(((activeCard + 1) / storyCards.length) * 100)}%</span>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style>{`
                .shadow-2xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }

                .hover-scale-102:hover {
                    transform: scale(1.02);
                }

                .scale-102 {
                    transform: scale(1.02);
                }

                button, .transition-all {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .glow-effect {
                    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
                }
            `}</style>
        </section>
    );
};

export default WhyWeStarted;
