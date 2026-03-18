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

// Discord SVG icon (not in lucide-react)
const DiscordIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

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
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href={CONTACT_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-50/80 border border-sky-100 text-slate-700 text-sm font-medium hover:bg-sky-100/70 transition-colors duration-200"
            >
              <Instagram size={16} className="text-sky-500" />
              luminux.fx
            </a>
            <a
              href={CONTACT_DATA.instagramWife}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-pink-50/80 border border-pink-100 text-slate-700 text-sm font-medium hover:bg-pink-100/70 transition-colors duration-200"
            >
              <Instagram size={16} className="text-pink-400" />
              auriona.fx
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
            <a
              href={CONTACT_DATA.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-50/80 border border-sky-100 text-slate-700 text-sm font-medium hover:bg-sky-100/70 transition-colors duration-200"
            >
              <DiscordIcon size={16} className="text-sky-500" />
              djs_yt
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
              title="Email"
            >
              <Mail size={15} />
            </a>
            <a
              href={CONTACT_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
              title="luminux.fx"
            >
              <Instagram size={15} />
            </a>
            <a
              href={CONTACT_DATA.instagramWife}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-pink-400 transition-colors duration-200"
              title="auriona.fx"
            >
              <Instagram size={15} />
            </a>
            <a
              href={CONTACT_DATA.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
              title="Telegram"
            >
              <Send size={15} />
            </a>
            <a
              href={CONTACT_DATA.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
              title="Discord: djs_yt"
            >
              <DiscordIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AboutSection, ContactSection, Footer };

export default function AboutContact() {
  return (
    <>
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
