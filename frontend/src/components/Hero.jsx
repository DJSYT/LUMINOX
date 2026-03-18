import React, { useEffect, useRef } from "react";
import { LOGO_URL } from "../mock";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);

  const handleWorkClick = (e) => {
    e.preventDefault();
    const target = document.querySelector("#work");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(186,230,253,0.55) 0%, rgba(224,242,254,0.3) 50%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />
        <div
          className="absolute bottom-[-5%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(125,211,252,0.4) 0%, rgba(186,230,253,0.2) 50%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
        <div
          className="absolute top-[40%] left-[55%] w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(224,242,254,0.6) 0%, transparent 70%)",
            filter: "blur(40px)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50/80 border border-sky-200/60 text-sky-600 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Digital Artist & Video Editor
        </div>

        {/* Logo + Name */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src={LOGO_URL}
            alt="Luminux Logo"
            className="w-16 h-16 object-contain rounded-2xl shadow-lg shadow-sky-100"
          />
        </div>

        {/* Main Headline */}
        <h1
          className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-slate-900 leading-none mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Luminux
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Crafting premium visual experiences through motion, light, and the art of the unseen frame.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWorkClick}
            className="group flex items-center gap-2.5 px-8 py-4 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-700 shadow-lg shadow-slate-900/20 transition-colors duration-300"
          >
            View My Work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:bg-sky-50/60 hover:border-sky-200 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Hint */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
