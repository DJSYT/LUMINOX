import React, { useRef, useState, useEffect } from "react";
import { ABOUT_DATA, CONTACT_DATA, LOGO_URL } from "../mock";
import { Mail, Send, Instagram } from "lucide-react";

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { ref, visible };
}

function AboutSection() {
  const { ref, visible } = useScrollReveal();
  const { ref: skillRef, visible: skillVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-white via-sky-50/40 to-white overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(186,230,253,0.35) 0%, transparent 70%)",
            filter: "blur(70px)"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }`}
          >
            <span className="text-xs font-semibold text-sky-500 uppercase tracking-widest">About</span>
            <h2
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-8 leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Person<br />
              <span className="text-slate-400">Behind the Edit.</span>
            </h2>
            <div className="space-y-5">
              {ABOUT_DATA.bio.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Skills card */}
          <div
            ref={skillRef}
            className={`transition-all duration-700 delay-200 ${ skillVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }`}
          >
            <div
              className="relative p-8 rounded-3xl border border-sky-100/80 bg-white/70 backdrop-blur-md shadow-xl shadow-sky-100/30"
            >
              {/* Glass sheen */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 to-sky-50/20 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <img src={LOGO_URL} alt="Luminux" className="w-10 h-10 rounded-xl object-contain" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Luminux</p>
                    <p className="text-xs text-slate-400">Digital Artist & Editor</p>
                  </div>
                </div>

                <div className="space-y-1 mb-8">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_DATA.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-sky-50/80 border border-sky-100 text-sky-700 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-sky-100/60">
                  {[
                    { label: "Projects", value: "50+" },
                    { label: "Style", value: "Alight Motion" },
                    { label: "Focus", value: "Motion FX" },
                    { label: "Status", value: "Available" }
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs text-slate-400 mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, visible } = useScrollReveal(0.1);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="relative py-28 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse, rgba(186,230,253,0.35) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }`}
        >
          <span className="text-xs font-semibold text-sky-500 uppercase tracking-widest">Contact</span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mt-3 mb-6 leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {CONTACT_DATA.headline}
          </h2>
          <p className="text-slate-500 text-lg mb-12">{CONTACT_DATA.subline}</p>

          {/* Email button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-700 shadow-lg shadow-slate-900/20 transition-colors duration-300"
            >
              <Mail size={16} />
              {CONTACT_DATA.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 rounded-full border border-slate-200 text-slate-600 text-sm font-medium hover:bg-sky-50/60 hover:border-sky-200 transition-colors duration-300"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={CONTACT_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-50/80 border border-sky-100 text-slate-700 text-sm font-medium hover:bg-sky-100/70 transition-colors duration-200"
            >
              <Instagram size={16} className="text-sky-500" />
              Instagram
            </a>
            <a
              href={CONTACT_DATA.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-50/80 border border-sky-100 text-slate-700 text-sm font-medium hover:bg-sky-100/70 transition-colors duration-200"
            >
              <Send size={16} className="text-sky-500" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src={LOGO_URL}
              alt="Luminux"
              className="w-7 h-7 object-contain rounded-lg brightness-0 invert opacity-80"
            />
            <span
              className="text-white font-bold text-sm opacity-80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Luminux
            </span>
          </div>
          <p className="text-slate-500 text-xs text-center">
            © {new Date().getFullYear()} Luminux. Digital Artist & Video Editor.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
            >
              <Mail size={15} />
            </a>
            <a
              href={CONTACT_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
            >
              <Instagram size={15} />
            </a>
            <a
              href={CONTACT_DATA.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
            >
              <Send size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AboutContact() {
  return (
    <>
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
