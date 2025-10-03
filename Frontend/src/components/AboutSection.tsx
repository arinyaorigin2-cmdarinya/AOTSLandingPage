import React from "react";

const AboutSection: React.FC = () => {
    return (
        <div className="w-full bg-black text-white py-16 px-6 relative overflow-hidden">
            {/* Background dotted pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#666_0.6px,transparent_0.6px)] [background-size:14px_14px]"></div>

            {/* Light transparent overlay mask */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Our Story */}
                <div className="relative grid md:grid-cols-2 gap-12 items-center z-10">
                    {/* Text */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Our Story
                        </h2>
                        <p className="text-gray-300 mb-4">
                            We started with a vision to build intelligent software that
                            empowers businesses to transform data into meaningful outcomes.
                            From humble beginnings, our journey has been driven by innovation
                            in AI, data science, and cloud technologies.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Today, we deliver world-class machine learning solutions, data
                            analytics platforms, and web & mobile applications for industries
                            ranging from finance to retail and healthcare.
                        </p>
                        <p className="text-gray-300">
                            Our story is about enabling businesses to scale with intelligent,
                            reliable, and future-ready digital solutions.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/image/global-v2.png"
                            alt="Global Solutions"
                            className="w-[28rem] h-[28rem] object-contain"
                        />
                    </div>
                </div>

                {/* Our Mission */}
                <div className="relative grid md:grid-cols-2 gap-12 items-center mt-5 z-10">
                    {/* Image */}
                    <div className="flex justify-center md:order-1 order-2">
                        <img
                            src="/image/goal.png"
                            alt="Target"
                            className="w-[28rem] h-[28rem] object-contain"
                        />
                    </div>

                    {/* Text */}
                    <div className="md:order-2 order-1">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                            Our Mission
                        </h2>
                        <p className="text-gray-300 mb-4">
                            Our mission is to craft scalable applications, build
                            cloud-native solutions, and pioneer blockchain innovations that
                            redefine industries.
                        </p>
                        <p className="text-gray-300 mb-4">
                            We believe technology should not only solve today’s challenges but
                            also unlock new opportunities for the future. That’s why we
                            integrate AI, automation, and cutting-edge software development
                            practices into every solution we deliver.
                        </p>
                        <p className="text-gray-300">
                            We are committed to helping businesses accelerate their digital
                            transformation journey with secure, intelligent, and innovative
                            software solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
