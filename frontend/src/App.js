import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import AboutContact from "./components/AboutContact";

function App() {
  return (
    <div className="luminux-app">
      <Navbar />
      <main>
        <Hero />
        <AboutContact />
        <ProjectShowcase />
      </main>
    </div>
  );
}

export default App;
