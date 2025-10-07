import React from 'react';

// Define the type for service card data
interface ServiceCard {
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
const ServicesSection: React.FC = () => {
    const servicesData: ServiceCard[] = [
        {
            id: 1,
            title: "Machine Learning Solutions",
            description: "Design and deploy intelligent ML systems to enhance decision-making and automate complex processes.",
            items: [
                "Custom ML model development",
                "Deep learning & neural networks",
                "Computer vision applications",
                "Natural language processing (NLP)",
                "Model optimization and deployment"
            ],
            bulletColor: "bg-blue-500",
            image: "/image/AIML.png"
        },
        {
            id: 2,
            title: "Data Analysis & Business Intelligence",
            description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
            items: [
                "Data cleaning and preprocessing",
                "Predictive and prescriptive analytics",
                "Interactive dashboards & visualizations",
                "Real-time data monitoring",
                "ETL & data pipeline development"
            ],
            bulletColor: "bg-purple-500",
            image: "/image/analysts.png"
        },
        {
            id: 3,
            title: "Web Development",
            description: "Full-stack web solutions that are responsive, scalable, and optimized for performance.",
            items: [
                "Frontend development (React, Angular, Vue)",
                "Backend development (Node.js, Django, Flask)",
                "Responsive and mobile-first design",
                "API design & integration",
                "Web application optimization"
            ],
            bulletColor: "bg-teal-500",
            image: "/image/webdev.png"
        },
        {
            id: 4,
            title: "App Development",
            description: "Creating high-performance mobile applications for iOS and Android with smooth user experience.",
            items: [
                "Native mobile apps (Swift, Kotlin)",
                "Cross-platform apps (React Native, Flutter)",
                "App UI/UX design",
                "API integration & backend support",
                "App testing & deployment"
            ],
            bulletColor: "bg-orange-500",
            image: "/image/appdev.png"
        },
        {
            id: 5,
            title: "Cloud Solutions",
            description: "Robust and scalable cloud infrastructure solutions to power modern applications.",
            items: [
                "Cloud architecture & migration",
                "AWS, Azure, GCP deployment",
                "Serverless solutions",
                "Containerization & orchestration",
                "DevOps automation"
            ],
            bulletColor: "bg-green-500",
            image: "/image/CloudTech.png"
        },
        {
            id: 6,
            title: "Blockchain Development",
            description: "Develop decentralized solutions for secure, transparent, and efficient business processes.",
            items: [
                "Smart contract development",
                "Decentralized application (DApp) development",
                "DeFi & NFT solutions",
                "Blockchain integration & consulting",
                "Token creation & management"
            ],
            bulletColor: "bg-red-500",
            image: "/image/BlockChain.png"
        }
    ];

    const ServiceCard: React.FC<{ service: ServiceCard }> = ({ service }) => {
        return (
            <div className="relative rounded-2xl p-[2px] overflow-hidden w-[95%] mx-auto">
                {/* Animated Blue Border */}
                <div className="absolute inset-0 rounded-2xl animate-blue-border 
                    bg-[linear-gradient(270deg,#1e3a8a,#3b82f6,#1e3a8a)] 
                    bg-[length:400%_400%]" />

                {/* Inner Content */}
                <div className="relative bg-black rounded-2xl p-6 h-[550px] z-10 flex flex-col">
                    {/* Image Section */}
                    {service.image && (
                        <div className="mb-4 rounded-xl overflow-hidden flex justify-center">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="max-h-48 w-auto object-contain"
                            />
                        </div>
                    )}

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {service.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-base leading-relaxed flex-grow">
                        {service.description}
                    </p>
                    <ul className="grid grid-cols-1 gap-3">
                        {service.items.map((item, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                                <span
                                    className={`w-2 h-2 ${service.bulletColor} rounded-full mr-3 flex-shrink-0`}
                                ></span>
                                <span className="text-gray-200 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
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

    // Book a Call Button (glowing border)
    const GlowButton: React.FC = () => {
        return (
            <button onClick={handleBookMeeting} className="relative rounded-lg p-[2px] overflow-hidden group transition-all duration-300">
                <div className="absolute inset-0 rounded-lg animate-blue-border 
                    bg-[linear-gradient(270deg,#1e3a8a,#3b82f6,#1e3a8a)] 
                    bg-[length:400%_400%]" />
                <span className="relative z-10 block bg-white text-black px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-200 transition-all duration-300">
                    Book a Call
                </span>
            </button>
        );
    };

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Services
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/*  Button Section */}
                <div className="text-center mt-16">
                    <GlowButton />
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
