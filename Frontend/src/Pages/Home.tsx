import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyWeStarted from "../components/WhyWeStarted";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <ServicesSection />
            <WhyWeStarted />
            <FAQSection />
            <Footer />
        </div>
        

    );

};

export default Home;