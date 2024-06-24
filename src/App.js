import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Testimonials from "./Pages/Testimonials";
import Projects from "./Pages/Projects";
import NotFound from "./Pages/Error";
import Theme from "./Pages/Theme";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/themes" element={<Theme />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
