"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Monitor, MapPin, Instagram, Phone, Loader2 } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

// Data Imports
import { PROFILE, PROJECTS } from "@/data/mock";
import Terminal from "@/components/Terminal";
import Timeline from "@/components/Timeline";
import TechOrbit from "@/components/TechOrbit";
import Achievements from "@/components/Achievements";
import Image from "next/image";
import Hobbies from "@/components/Hobbies";
import confetti from "canvas-confetti";
import { fireConfetti } from "@/components/fireConfetti";
import { useRouter } from "next/navigation";
// --- Sub-Component: Static Tailwind Background ---
const Background = () => (
  <div className="fixed inset-0 -z-10 bg-[#0b1120] overflow-hidden">
    <div
      className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 40 L40 40 L40 0' fill='none' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}
    />
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
  </div>
);

// --- Sub-Component: Magnetic Button ---
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const midX = clientX - (left + width / 2);
    const midY = clientY - (top + height / 2);
    setPosition({ x: midX * 0.15, y: midY * 0.15 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};


// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 30 });
  const navigate = useRouter();
  const profileImg = "/pic.png";
  const [isLoading, setIsLoading] = useState(false);


  const handleViewCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setIsLoading(true)
    // 4, 6, 8
    fireConfetti(11, rect, e);

    setTimeout(() => {
      setIsLoading(false);
      navigate.push("/cv");
    }, 4000);

  };

  return (
    <main className="relative min-h-screen text-slate-400 selection:bg-sky-500/30 font-sans antialiased overflow-x-hidden">
      <Background />

      {/* --- IMAGE EXPANSION MODAL --- */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#0b1120]/80 backdrop-blur-2xl cursor-zoom-out"
              onMouseLeave={() => setIsExpanded(false)}
              onClick={() => setIsExpanded(false)}
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none">
              <motion.img
                layoutId="profile-pic"
                src={profileImg}
                alt={PROFILE.name}
                className="w-[80vw] h-[60vh] md:w-[500px] md:h-[500px] object-contain pointer-events-auto rounded-3xl"
              />
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-sky-500 z-[100] origin-left shadow-[0_0_10px_#0ea5e9]" style={{ scaleX }} />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-[#0b1120]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-white text-lg tracking-tight flex items-center gap-2">
            <Code2 className="text-green-600" size={20} />
            {PROFILE.name.toUpperCase().replace(" ", "_")}.dev
          </Link>
          <div className="flex gap-8 items-center text-xs font-bold uppercase tracking-widest">
            <Link href="/cv" className="hover:text-sky-400 transition-colors">Download CV</Link>
            <Link href="#work" className="hover:text-sky-400 transition-colors">Experience</Link>
            <MagneticButton>
              <Link href="/contact" className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20">
                Contact
              </Link>
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-20 px-6 max-w-[90%] mx-auto min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>



            <div className="flex items-center gap-5 mb-10">
              <div
                className="relative group cursor-zoom-in"
                onMouseEnter={() => setIsExpanded(true)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-700"></div>
                {!isExpanded && (
                  <motion.img
                    layoutId="profile-pic"
                    src={profileImg}
                    alt={PROFILE.name}
                    className="relative w-20 h-20 rounded-full border-2 border-[#0b1120] object-cover bg-slate-800"
                  />
                )}
                {isExpanded && <div className="w-20 h-20" />}
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-bold mb-0">
                  <Monitor size={14} /> Available for Senior Roles
                </div>
                <h3 className="text-white text-xl tracking-tight">My name is <span className="text-white font-bold">{PROFILE.name}</span></h3>
                <p className="text-green-400 text-xs font-mono uppercase tracking-[0.2em]">and I'm a {PROFILE.role}</p>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tighter mb-8">
              CRAFTING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">DIGITAL CORE.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-tight text-justify font-light">
              Results-driven Senior Developer at <span className="text-white">{PROFILE.company}</span> with over {PROFILE.experience} of experience in building enterprise-grade web and mobile applications. Proven track record in designing scalable system architectures and leading technical implementations for complex platforms serving millions of users.
            </p>

            <div className="flex flex-wrap gap-4">

              <button disabled={isLoading} onClick={(e) => handleViewCV(e)} className="bg-white disabled:bg-white/50 text-slate-900 px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-sky-50 transition-all shadow-xl text-sm">
                Download CV {isLoading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
              </button>
              <div className="flex gap-3">
                <Link href={PROFILE.socials[0].link} className="p-3.5 bg-slate-800/50 border border-slate-700 rounded-xl hover:text-sky-400 transition-all backdrop-blur-sm">
                  <Github size={20} />
                </Link>
                <Link href={PROFILE.socials[1].link} className="p-3.5 bg-slate-800/50 border border-slate-700 rounded-xl hover:text-sky-400 transition-all backdrop-blur-sm">
                  <Linkedin size={20} />
                </Link>
                <Link href={PROFILE.email} className="p-3.5 bg-slate-800/50 border border-slate-700 rounded-xl hover:text-sky-400 transition-all backdrop-blur-sm">
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* Work Experience Timeline Section */}
      <section id="journey" className="py-32 border-t border-slate-800 bg-[#0b1120]/30 relative overflow-hidden">
        {/* Decorative background glow for this section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-green-600 font-bold text-xs tracking-[0.4em] uppercase mb-4">// Professional Timeline</h2>
          <h3 className="text-5xl font-bold text-white tracking-tighter">Journey So Far</h3>
        </div>

        <Timeline />
      </section>

      {/* Technologies */}
      <section className="pt-32 pb-12 relative overflow-hidden bg-[#0b1120]">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
          <h2 className="text-green-600 font-bold text-xs tracking-[0.4em] uppercase mb-4">// Tech Ecosystem</h2>
          <h3 className="text-5xl font-bold text-white tracking-tighter">Technologies I Work With</h3>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto font-light">
            A 3D visualization of my core technical competencies and specialized tools.
          </p>
        </div>

        {/* The Orbiting Galaxy */}
        <div className="relative min-h-[600px] w-full flex items-center justify-center">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent pointer-events-none" />

          <TechOrbit />

          {/* UI Labels for the 3D scene */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Core Stack</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="text-[10px] font-bold uppercase tracking-widest">[ Drag to Rotate ]</span>
            </div>
          </div>
        </div>
        {/* List of all skills */}
        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          {PROFILE.skills.map((skill, index) => (
            <div key={index} className="px-6 flex justify-center items-center gap-2 py-3.5 bg-white hover:bg-sky-50 border hover:border-sky-700 cursor-pointer hover:shadow-sky-700 shadow shadow-slate-700 rounded-xl text-slate-600 hover:text-sky-600 transition-all backdrop-blur-lg"><img
              src={`https://api.iconify.design/logos:${skill == "React Native" ? "react" : skill.toLowerCase().replace('.', '')}.svg`}
              alt={skill}
              className="w-8 h-8 object-contain brightness-125"
              onError={(e: any) => e.target.src = 'https://api.iconify.design/lucide:code.svg?color=%23fbbf24'}
            /> {skill}</div>
          ))}
        </div>
      </section>

      {/* Projects Horizontal Scroll */}
      <section id="work" className="py-32 border-t border-slate-800">
        <div className="max-w-[80%] mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-green-600 font-bold text-xs tracking-[0.4em] uppercase mb-4">// Featured Projects</h2>
            <h3 className="text-5xl font-bold text-white tracking-tighter">Top <span className="text-sky-400 font-bold">#5</span> Projects</h3>
          </div>
          <Link href="/projects" className="text-sm font-bold text-slate-500 hover:text-white transition-colors flex items-center gap-2">
            See More Projects <ExternalLink size={16} />
          </Link>
        </div>

        <div className="flex gap-8 overflow-x-auto px-6 pb-20 pt-10 no-scrollbar scroll-smooth">
          {PROJECTS.slice(0, 5).map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="min-w-[400px] md:min-w-[600px] bg-slate-900/20 border border-slate-700/50 rounded-3xl overflow-hidden backdrop-blur-sm group"
            >
              <div className="h-72 bg-slate-950 border-b border-slate-800">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="p-12">
                <span className="text-sky-500 text-xs font-bold tracking-widest uppercase">{project.client}</span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-4 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg font-light">{project.description}</p>
                <Link
                  href={`/project/${project.id}`}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm bg-slate-800 px-6 py-3 rounded-xl hover:bg-sky-600 transition-colors"
                >
                  Explore Project <ExternalLink size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Achievements />

      <Hobbies />


      {/* Experience / Footer Section */}
      <footer className="py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 border-t border-slate-800">
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 tracking-tighter">Background</h3>
          <div className="space-y-6">
            {PROFILE.qualifications.map((q, i) => (
              <a href={q.link} key={i} className="p-8 bg-slate-800/20 border border-slate-700/50 rounded-2xl flex justify-between items-center group transition-all hover:border-sky-500/30">
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-sky-400 transition-colors">{q.degree}</h4>
                  <p className="text-sm text-slate-500 mt-1">{q.uni}</p>
                </div>
                <span className="text-sky-500 font-mono text-sm font-bold">{q.year}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 tracking-tighter flex items-center gap-4">
            <MapPin size={24} className="text-sky-500" /> Let&apos;s Connect
          </h3>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            I&apos;m currently open to senior-level engineering opportunities and high-impact consulting projects.
          </p>
          <div className="space-y-4">
            <Link href={`mailto:${PROFILE.email}`} className="text-2xl font-bold text-white hover:text-sky-400 transition-colors block underline decoration-sky-500 decoration-2 underline-offset-8">
              {PROFILE.email}
            </Link>
            <p>{PROFILE.location}</p>

            <div className="flex gap-4 pt-10">
              <Link
                href={PROFILE.socials[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#181717] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#24292f]"
              >
                <Github className="w-7 h-7" />
              </Link>

              <Link
                href={PROFILE.socials[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#004182]"
              >
                <Linkedin className="w-7 h-7" />
              </Link>

              <Link
                href={PROFILE.socials[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-7 h-7" />
              </Link>

              <Link
                href={PROFILE.socials[3].link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20b954]"
              >
                <FaWhatsapp className="w-7 h-7" />
              </Link>

            </div>
          </div>
        </div>
      </footer>

      <div className="pb-10 text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em]">
        © 2025 My Official Portfolio • Synchronized
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}