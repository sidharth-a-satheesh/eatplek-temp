import React from "react";
import './App.scss'
// import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/aboutUs/AboutUs";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import ContactUs from "./pages/contactUs/ContactUs";
import Terms from "./pages/terms/Terms";
import Download from "./pages/download/Download";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
