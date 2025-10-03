import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    isOpen?: boolean;
}

const FAQSection: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            id: 1,
            question: "What services does Arinya Origin Technology Solution provide?",
            answer:
                "Arinya Origin Technology Solution delivers end-to-end software services including custom software development, web and mobile app development, cloud integration, UI/UX design, enterprise solutions, and IT consulting.",
            isOpen: false,
        },
        {
            id: 2,
            question: "Do you offer custom software development?",
            answer:
                "Yes, we specialize in building tailored software solutions that meet your specific business needs, whether it’s enterprise-grade systems, SaaS platforms, or industry-specific applications.",
            isOpen: false,
        },
        {
            id: 3,
            question: "Which industries do you serve?",
            answer:
                "We work across a variety of industries including finance, healthcare, retail, logistics, education, e-commerce, and startups. Our solutions are adaptable and scalable for businesses of any size.",
            isOpen: false,
        },
        {
            id: 4,
            question: "What technologies does Arinya Origin use?",
            answer:
                "Our team is experienced in modern technologies such as React, Angular, Node.js, Python, .NET, Java, AWS, Azure, and popular databases. We select the right tech stack based on your project’s requirements.",
            isOpen: false,
        },
        {
            id: 5,
            question: "How much does a software project cost?",
            answer:
                "The cost depends on the project’s complexity, features, and timeline. Arinya Origin offers transparent pricing with flexible engagement models, including fixed-price and dedicated teams.",
            isOpen: false,
        },
        {
            id: 6,
            question: "Do you provide ongoing support and maintenance?",
            answer:
                "Yes. We provide continuous support, system monitoring, performance optimization, and feature updates to ensure your software stays reliable and secure over time.",
            isOpen: false,
        },
        {
            id: 7,
            question: "How long does it take to build a custom solution?",
            answer:
                "Project duration varies based on scope and complexity. Small to mid-sized projects may take a few weeks, while enterprise solutions can take several months. We provide a clear roadmap and timeline during the planning phase.",
            isOpen: false,
        },
        {
            id: 8,
            question: "Why choose Arinya Origin Technology Solution?",
            answer:
                "We focus on delivering scalable, secure, and innovative solutions with a client-first approach. Our expertise, transparent process, and long-term support make us a trusted partner for businesses worldwide.",
            isOpen: false,
        },
        {
            id: 9,
            question: "Do you offer free consultations?",
            answer:
                "Yes. We provide free initial consultations to understand your business challenges and recommend the right digital solution tailored to your needs.",
            isOpen: false,
        },
    ]);


    const toggleFAQ = (id: number) => {
        setFaqs(faqs.map(faq =>
            faq.id === id
                ? { ...faq, isOpen: !faq.isOpen }
                : { ...faq, isOpen: false }
        ));
    };
    const navigate = useNavigate();

    return (
        <section className="w-full min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Number Badge */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </span>
                                    </div>

                                    {/* Question */}
                                    <div className="flex-1 text-left">
                                        <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                                            {faq.question}
                                        </h3>
                                    </div>
                                </div>

                                {/* Chevron Icon */}
                                <div className="flex-shrink-0 transform transition-transform duration-300">
                                    <svg
                                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${faq.isOpen ? 'rotate-180' : 'rotate-0'
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${faq.isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <div className="pl-16 border-l-2 border-gray-700">
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-6">
                        Still have questions? We're here to help.
                    </p>
                    <button onClick={() => navigate("/contact")}
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
        .transition-all {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Smooth scrolling for accordion */
        .overflow-hidden {
          transition: max-height 0.3s ease-in-out;
        }
      `}</style>
        </section>
    );
};

export default FAQSection;