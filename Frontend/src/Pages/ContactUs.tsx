import React from "react";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";



const ContactUs: React.FC = () => {

    return (
        <div>
            <Navbar />
            <ContactHero />
            <ContactSection />
            <Footer />


        </div>


    );

};

export default ContactUs;