import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./components/Home";
import About from "./components/About";
import Teaching from "./components/Teaching";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'
import Publications from "./components/Publications";
import Talks from "./components/Talks";
import Students from "./components/Students";
import Activities from "./components/Activities";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <div className="main-panel">
        <div>
          <Navbar />
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/students" element={<Students />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/talks" element={<Talks />} />
              <Route path="/teaching" element={<Teaching />} />              
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
