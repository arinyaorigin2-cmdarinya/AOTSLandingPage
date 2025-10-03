import React from "react";

interface CardProps {
    title: string;
    description: string;
    icon: string;
    variant?: "service" | "feature";
}

const Card: React.FC<CardProps> = ({ title, description, icon, variant = "service" }) => {
    return (
        <div
            className={`
        relative text-center text-white transition-all duration-300 hover:scale-105 
        ${variant === "feature"
                    ? "w-60 h-60 rounded-full flex flex-col items-center justify-start bg-[#111] px-4 py-6"
                    : "rounded-xl bg-[#111] border-2 border-transparent hover:border-[#00f6ff] hover:shadow-[0_0_25px_#00f6ff] p-0 overflow-hidden"}
      `}
        >
            {variant === "feature" ? (
                <>
                    {/* Small Tick Circle */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md mb-4 mt-4">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-lg font-bold text-green-400 mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center">{description}</p>
                </>
            ) : (
                <>
                    {/* Image Container - full visible image */}
                    <div className="w-full h-48 flex items-center justify-center bg-[#111]">
                        <img
                            src={icon}
                            alt={title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Title and Description */}
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{title}</h3>
                        <p className="text-gray-300 text-sm">{description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            title: "Software & Web Development",
            description:
                "Custom software, websites, and mobile apps built with modern technologies to deliver seamless user experiences.",
            icon: "/image/webdev.png",
        },
        {
            title: "AI & Data Solutions",
            description:
                "From AI model development to data engineering, we help businesses unlock insights and automate processes.",
            icon: "/image/AIML.png",
        },
        {
            title: "ERP & Enterprise Systems",
            description:
                "Robust ERP solutions and enterprise software to streamline operations and drive business efficiency.",
            icon: "/image/ERP.png",
        },
    ];

    const features = [
        {
            title: "Innovation",
            description: "Building smart healthcare systems with cutting-edge solutions.",
            icon: "/icons/innovation.png",
        },
        {
            title: "Collaboration",
            description: "Partnering with clients to improve outcomes and performance.",
            icon: "/icons/collaboration.png",
        },
        {
            title: "Excellence",
            description:
                "Operating with transparency and clear overview of all solutions futures.",
            icon: "/icons/excellence.png",
        },
        {
            title: "Integrity",
            description:
                "Participate address in A with internal considerations receive potential the overview.",
            icon: "/icons/integrity.png",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-gray-950 to-black text-white flex flex-col items-center py-16 px-4">
            {/* Main Heading */}
            <div className="text-center mb-16 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Our Ultimate Set of Services for Your
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Ideas Implementation
                </h2>
            </div>

            {/* Service Cards */}
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 w-full max-w-6xl mb-20">
                {services.map((service, idx) => (
                    <Card
                        key={idx}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        variant="service"
                    />
                ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full max-w-6xl">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                    Why Choose Us
                </h3>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 place-items-center">
                    {features.map((feature, idx) => (
                        <Card
                            key={idx}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            variant="feature"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
