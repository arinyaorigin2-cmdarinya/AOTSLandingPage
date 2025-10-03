import React from 'react';

interface ExpertiseItem {
    title: string;
    description: string;
    imageUrl: string;
}

const CoreExpertise: React.FC = () => {
    const expertiseItems: ExpertiseItem[] = [
        {
            title: 'Software Development',
            description:
                'Full-stack development expertise with modern technologies including React, Node.js, Python, and cloud platforms. Building scalable, maintainable, and high-performance applications.',
            imageUrl: '/image/webdev.png',
        },
        {
            title: 'AI & Machine Learning',
            description:
                'Expert development of neural networks, computer vision systems, and NLP solutions. End-to-end ML pipeline development from data preprocessing to model deployment and monitoring.',
            imageUrl: '/image/AI-Brain.png',
        },
        {
            title: 'Data Analysis',
            description:
                'Advanced data analytics and visualization expertise. Transforming raw data into actionable insights using statistical analysis, predictive modeling, and business intelligence tools.',
            imageUrl: '/image/analytics.png',
        },
        {
            title: 'Blockchain',
            description:
                'Comprehensive blockchain development including smart contracts, DeFi protocols, DApp development, and Web3 integration solutions with security and scalability focus.',
            imageUrl: '/image/BlockChain.png',
        },
    ];

    return (
        <div className="w-full bg-black py-16 px-6">
            {/* Header */}
            <h1 className="text-4xl font-bold text-white mb-12 text-center">
                Core Expertise
            </h1>

            {/* Expertise Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {expertiseItems.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-gray-800 overflow-hidden 
                       hover:border-gray-600 hover:shadow-lg transition-all duration-300"
                    >
                        {/* Title Section */}
                        <div className="bg-[#141414] px-4 py-3 text-center">
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                                {item.title}
                            </h3>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-800" />

                        {/* Image Section */}
                        <div className="bg-[#1a1a1a] flex justify-center items-center py-8">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-32 h-32 object-contain"
                            />
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-800" />

                        {/* Description Section */}
                        <div className="bg-[#0f0f0f] px-6 py-4 text-center">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreExpertise;
