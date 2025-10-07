import React from 'react';

// Define the type for industry card data
interface IndustryCard {
    id: number;
    title: string;
    description: string;
    items: string[];
    bulletColor: string;
    image?: string;
}
const handleBookMeeting = () => {
    window.open("https://forms.gle/ZCrMNodAfu54B7xU9", "_blank");
  };

const IndustriesSection: React.FC = () => {
    const industriesData: IndustryCard[] = [
        {
            id: 1,
            title: "Software Development",
            description: "Custom software solutions to streamline business operations and improve efficiency.",
            items: [
                "Enterprise software development",
                "Custom application design",
                "API development & integration",
                "Cloud-based software solutions"
            ],
            bulletColor: "bg-blue-500",
            image: "/image/ERP.png"
        },
        {
            id: 2,
            title: "Finance & Banking",
            description: "Innovative solutions to enhance financial services, trading, and risk management.",
            items: [
                "Algorithmic trading systems",
                "Risk management platforms",
                "Fraud detection & prevention",
                "Financial analytics dashboards"
            ],
            bulletColor: "bg-green-500",
            image: "/image/tradingstats.png"
        },
        {
            id: 3,
            title: "Healthcare & Life Sciences",
            description: "Technology-driven healthcare solutions for better patient outcomes and operational efficiency.",
            items: [
                "Electronic health records (EHR) systems",
                "Telemedicine platforms",
                "Healthcare analytics & reporting",
                "Medical device integration"
            ],
            bulletColor: "bg-red-500",
            image: "/image/Healthcare.png"
        },
        {
            id: 4,
            title: "Retail & E-commerce",
            description: "End-to-end retail and e-commerce solutions to boost sales, optimize operations, and enhance customer experience.",
            items: [
                "Custom e-commerce website development",
                "Inventory & supply chain management",
                "Payment gateway integration",
                "Omnichannel customer engagement"
            ],
            bulletColor: "bg-purple-500",
            image: "/image/e-com.png"
        }
    ];

    const IndustryCard: React.FC<{ industry: IndustryCard }> = ({ industry }) => {
        return (
            <div className="relative rounded-2xl p-[2px] overflow-hidden w-[95%] mx-auto">
                {/* Animated Blue Border */}
                <div className="absolute inset-0 rounded-2xl animate-blue-border 
                    bg-[linear-gradient(270deg,#1e3a8a,#3b82f6,#1e3a8a)] 
                    bg-[length:400%_400%]" />

                {/* Inner Content */}
                <div className="relative bg-black rounded-2xl p-6 h-[550px] z-10 flex flex-col">
                    {/* Image Section */}
                    {industry.image && (
                        <div className="mb-4 rounded-xl overflow-hidden flex justify-center">
                            <img
                                src={industry.image}
                                alt={industry.title}
                                className="max-h-48 w-auto object-contain"
                            />
                        </div>
                    )}

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {industry.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-base leading-relaxed flex-grow">
                        {industry.description}
                    </p>
                    <ul className="grid grid-cols-1 gap-3">
                        {industry.items.map((item, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                                <span
                                    className={`w-2 h-2 ${industry.bulletColor} rounded-full mr-3 flex-shrink-0`}
                                ></span>
                                <span className="text-gray-200 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Book a Call Button for each card */}
                    <div className="mt-6 pt-4 border-t border-gray-700">
                        <button onClick={handleBookMeeting} className="relative rounded-lg p-[2px] overflow-hidden group transition-all duration-300 w-full">
                            <div className="absolute inset-0 rounded-lg animate-blue-border 
                                bg-[linear-gradient(270deg,#1e3a8a,#3b82f6,#1e3a8a)] 
                                bg-[length:400%_400%]" />
                            <span className="relative z-10 block bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all duration-300 w-full">
                                Book a Call
                            </span>
                        </button>
                    </div>
                </div>

                {/* Border Animation Keyframes */}
                <style>
                    {`
                    @keyframes blue-border {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 200% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animate-blue-border {
                        animation: blue-border 8s linear infinite;
                        filter: drop-shadow(0 0 20px #3b82f6) drop-shadow(0 0 40px #3b82f6);
                    }
                    `}
                </style>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Industries We Serve
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Delivering innovative solutions across diverse industries with deep domain expertise
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {industriesData.map((industry) => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;
