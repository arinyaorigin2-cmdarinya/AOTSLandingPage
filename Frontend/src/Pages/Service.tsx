import React from "react";
import Navbar from "../components/Navbar";
import DigitalSolutionsSection from "../components/DigitalSolutionsSection";
import ServicesSectionCard from "../components/ServicesSectionCards";
import Footer from "../components/Footer";
import IndustriesSection from "../components/IndustriesSection";


const Service: React.FC = () => {

    return (
        <div>
            <Navbar />
            <DigitalSolutionsSection />
            <ServicesSectionCard />
            <IndustriesSection />
            <Footer />
           
        </div>


    );

};

export default Service;