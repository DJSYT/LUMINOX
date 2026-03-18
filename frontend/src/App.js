import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import { AboutSection, ContactSection, Footer } from "./components/AboutContact";

function App() {
  return (
    <div className="luminux-app">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
