import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Events from "./Pages/Events";
import About from "./Pages/AboutPage/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./Pages/HomePage/Contact"
import Gallery from "./Pages/Gallery"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
