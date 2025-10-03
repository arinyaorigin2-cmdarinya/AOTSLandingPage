import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";


const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
    </Router>
  );
};

export default App;
