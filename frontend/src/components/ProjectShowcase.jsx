import React, { useState, useRef, useEffect } from "react";
import { PROJECTS_DATA } from "../mock";
import { Play, ExternalLink, X } from "lucide-react";

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function ProjectCard({ project, index }) {
  const { ref, visible } = useScrollReveal();
  const [hovered, setHovered] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const isLarge = project.size === "large";
  const isMedium = project.size === "medium";

  return (
    <>
      {/* Lightbox for video */}
      {videoOpen && project.type === "video" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={project.media}
              controls
              autoPlay
              className="w-full rounded-3xl"
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => project.type === "video" && setVideoOpen(true)}
        className={`
          relative overflow-hidden rounded-3xl cursor-pointer
          bg-white border border-sky-100/80
          transition-transform duration-500 transition-shadow
          ${
            isLarge
              ? "row-span-2 col-span-2 md:col-span-1 lg:col-span-2"
              : isMedium
              ? "col-span-2 md:col-span-1"
              : ""
          }
          ${
            hovered
              ? "scale-[1.02] shadow-2xl shadow-sky-200/60"
              : "shadow-lg shadow-sky-100/40"
          }
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
        style={{
          transitionProperty: "transform, box-shadow, opacity",
          transitionDuration: `500ms, 500ms, 700ms`,
          transitionDelay: `0ms, 0ms, ${index * 80}ms`
        }}
      >
        {/* Media */}
        <div className={`w-full overflow-hidden ${ isLarge ? "h-72 sm:h-96" : "h-52" }`}>
          {project.type === "video" ? (
            <div className="relative w-full h-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${ hovered ? "scale-110" : "scale-100" }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg shadow-sky-200/60 backdrop-blur-sm transition-transform duration-300 ${ hovered ? "scale-110" : "scale-100" }`}
                >
                  <Play size={24} className="text-slate-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${ hovered ? "scale-110" : "scale-100" }`}
            />
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-xs font-semibold text-sky-500 uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                {project.title}
              </h3>
            </div>
            <span className="text-xs text-slate-400 mt-0.5">{project.year}</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
        </div>

        {/* Hover Glow */}
        <div
          className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500 ${ hovered ? "opacity-100" : "opacity-0" }`}
          style={{
            boxShadow: "inset 0 0 40px rgba(125,211,252,0.08)"
          }}
        />
      </div>
    </>
  );
}

export default function ProjectShowcase() {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();

  return (
    <section id="work" className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(186,230,253,0.4) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${ titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
        >
          <span className="text-xs font-semibold text-sky-500 uppercase tracking-widest">Portfolio</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2 leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Selected Work
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg text-base leading-relaxed">
            A curated showcase of motion graphics, visual effects, and cinematic edits.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-auto">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
