import React from "react";

interface StatCard {
    id: number;
    title: string;
    value: string;
}

const statsData: StatCard[] = [
    { id: 1, title: "Clients", value: "200+" },
    { id: 2, title: "Projects", value: "280+" },
    { id: 3, title: "Happy Clients", value: "100%" },
    { id: 4, title: "Follower", value: "420K" },
    { id: 5, title: "Years Of Experience", value: "10+" },
];

const StatsSection: React.FC = () => {
    return (
        <div className="w-full bg-black text-white py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
                {statsData.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center justify-center bg-neutral-900 rounded-xl w-48 h-28 shadow-lg border border-gray-800 
                       hover:shadow-xl hover:-translate-y-1 hover:border-purple-500 transition-all duration-300"
                    >
                        {/* Title */}
                        <span className="text-xs uppercase tracking-wide text-gray-400">
                            {stat.title}
                        </span>

                        {/* Value with gradient */}
                        <span className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
