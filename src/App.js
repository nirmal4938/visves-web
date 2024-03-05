import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/pages/home";
import { About } from "./components/pages/aboutUs";
import "./components/styles/global.css";
import { Products } from "./components/pages/products";
import { Services } from "./components/pages/services";
import { Contact } from "./components/pages/contactus";
import { Gallery } from "./components/pages/gallery";

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
