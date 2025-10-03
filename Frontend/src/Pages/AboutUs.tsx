import React from "react";
import Navbar from "../components/Navbar";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import CoreExpertise from "../components/CoreExpertise";
import OperationalImpact from "../components/OperationalImpact";
import ReadyToDiscuss from "../components/ReadyToDiscuss";



const AboutUs: React.FC = () => {

    return (
        <div>
            <Navbar />
            <AboutUsHeroSection />
            <StatsSection />
            <AboutSection />
            <CoreExpertise />
            <OperationalImpact />
            <ReadyToDiscuss />
            <Footer />


        </div>


    );

};

export default AboutUs;