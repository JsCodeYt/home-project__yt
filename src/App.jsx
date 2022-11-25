import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About/About";
import Devolopment from "./pages/Devolopment/Devolopment";
import Agents from "./pages/Agents/Agents";
import Contact from "./pages/Contact/Contact";
import Features from "./pages/Features/Features";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/devolopment" element={<Devolopment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
