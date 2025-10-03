import React from "react";
import { CheckCircle } from "lucide-react"; // example icon (you can replace)

interface ImpactItem {
    value: string;
    title: string;
    description: string;
}

interface ValueItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const OperationalImpact: React.FC = () => {
    const impactItems: ImpactItem[] = [
        {
            value: "99.99%",
            title: "System Uptime",
            description: "For critical ML and trading infrastructure",
        },
        {
            value: "60%",
            title: "Cost Reduction",
            description: "Average operational cost savings for clients",
        },
        {
            value: "85%",
            title: "Automation Rate",
            description: "In client workflow optimization",
        },
        {
            value: "3x",
            title: "Performance Gain",
            description: "Average improvement in system efficiency",
        },
    ];

    const valueItems: ValueItem[] = [
        {
            title: "Innovation",
            description:
                "Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.",
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        },
        {
            title: "Collaboration",
            description:
                "Working closely with clients to develop tailored solutions that drive measurable success.",
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        },
        {
            title: "Excellence",
            description:
                "Maintaining the highest standards in code quality, system performance, and client outcomes.",
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        },
        {
            title: "Integrity",
            description:
                "Operating with transparency and ethical considerations at the forefront of all decisions.",
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        },
    ];

    return (
        <div className="w-full bg-black text-white py-20 px-6">
            {/* Operational Impact */}
            <h2 className="text-3xl font-bold text-center mb-12">
                Operational Impact
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {impactItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1a1a1a] rounded-2xl p-8 text-center shadow-md"
                    >
                        <h3 className="text-4xl font-bold mb-2 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
                            {item.value}
                        </h3>
                        <p className="text-lg font-semibold mb-2">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Our Value */}
            <h2 className="text-3xl font-bold text-center mb-12">Our Value</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {valueItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1a1a1a] rounded-full h-64 w-64 flex flex-col items-center justify-center mx-auto shadow-lg"
                    >
                        <div className="mb-3">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 text-center px-6">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OperationalImpact;
