"use client";
import React, { useRef } from "react";
import {
    Mail, Phone, MapPin, Globe, Github,
    Linkedin, Printer, ArrowLeft,
    Award, Briefcase, GraduationCap, Code2,
    Instagram,
    ExternalLinkIcon,
    Cpu, Palette, Plane, ChefHat, Music, Dumbbell, Sparkles
} from "lucide-react";
import { PROFILE, PROJECTS, EXPERIENCE, ACHIEVEMENTS, HOBBIES } from "@/data/mock";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CVPage() {
    const ICON_MAP: Record<string, React.ElementType> = {
        tech: Cpu,
        uiux: Palette,
        travel: Plane,
        cooking: ChefHat,
        music: Music,
        gym: Dumbbell
    };

    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="min-h-screen bg-slate-50 py-6 md:py-10 print:py-0 print:bg-white">
            {/* --- Control Bar (Hidden on Print) --- */}
            <div className="w-full max-w-5xl md:max-w-[210mm] mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center px-4 gap-4 print:hidden">
                <h1 className="text-xl font-bold text-slate-800">Curriculum Vitae</h1>
                <div className="flex gap-3 w-full sm:w-auto">
                    <Link
                        href={"/"}
                        className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-medium text-sm shadow-sm"
                    >
                        <ArrowLeft size={16} /> <span className="sm:hidden">Back</span><span className="hidden sm:inline">Go Back</span>
                    </Link>
                    <button
                        onClick={handlePrint}
                        className="flex-1 sm:flex-none justify-center flex cursor-pointer items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-sky-100 transition-all font-medium text-sm shadow-sm"
                    >
                        <Printer size={16} /> Print / PDF
                    </button>
                </div>
            </div>

            {/* --- CV Container --- */}
            {/* FORCE PRINT STYLES: print:max-w-[210mm] print:p-[15mm] overrides mobile width/padding */}
            <div
                ref={printRef}
                className="mx-auto bg-white shadow-none sm:shadow-2xl print:shadow-none w-full max-w-none md:max-w-[210mm] md:min-h-[297mm] p-6 md:p-[15mm] print:max-w-[210mm] print:min-h-[297mm] print:p-[15mm] text-slate-800 font-sans"
            >
                {/* --- Header Section --- */}
                {/* FORCE PRINT ROW: print:flex-row ensures header is side-by-side in PDF */}
                <header className="border-b-2 border-slate-800 pb-8 mb-8 flex flex-col md:flex-row print:flex-row justify-between items-start gap-6 md:gap-0 print:gap-0">
                    <div>
                        <h1 className="text-3xl md:text-4xl print:text-4xl font-black tracking-tighter text-slate-900 uppercase">
                            {PROFILE.name}
                        </h1>
                        <p className="text-lg md:text-xl print:text-xl font-bold text-sky-600 mt-1 uppercase tracking-widest">
                            {PROFILE.role}
                        </p>
                        <p className="text-slate-500 mt-2 max-w-lg text-sm leading-relaxed italic">
                            "{PROFILE.bio}"
                        </p>
                    </div>

                    <div className="w-full md:w-auto print:w-auto text-left md:text-right print:text-right space-y-2 md:space-y-1 print:space-y-1 text-sm">
                        <div className="flex items-center md:justify-end print:justify-end gap-3 md:gap-2 print:gap-2 text-slate-600">
                            <Mail size={14} className="md:order-2 print:order-2 shrink-0" /> <span className="md:order-1 print:order-1">{PROFILE.email}</span>
                        </div>
                        <div className="flex items-center md:justify-end print:justify-end gap-3 md:gap-2 print:gap-2 text-slate-600">
                            <Phone size={14} className="md:order-2 print:order-2 shrink-0" /> <span className="md:order-1 print:order-1">{PROFILE.phone}</span>
                        </div>
                        <div className="flex items-center md:justify-end print:justify-end gap-3 md:gap-2 print:gap-2 text-slate-600">
                            <MapPin size={14} className="md:order-2 print:order-2 shrink-0" /> <span className="md:order-1 print:order-1">{PROFILE.location}</span>
                        </div>
                        <div className="flex items-center md:justify-end print:justify-end gap-3 md:gap-2 print:gap-2 text-sky-600 font-bold pt-2">
                            <Globe size={14} className="md:order-2 print:order-2 shrink-0" />
                            <a href={PROFILE.portfolioLink} target="_blank" className="text-xs uppercase tracking-tighter hover:underline md:order-1 print:order-1">Portfolio</a>
                        </div>
                    </div>
                </header>

                {/* --- Grid Layout --- */}
                {/* FORCE PRINT GRID: print:grid print:grid-cols-12 restores 2-column layout */}
                <div className="flex flex-col md:grid md:grid-cols-12 print:grid print:grid-cols-12 gap-10">

                    {/* --- Left Column (Sidebar) --- */}
                    {/* FORCE PRINT ORDER & BORDER: print:order-1 puts sidebar back on left, print:border-r restores vertical divider */}
                    <aside className="order-2 md:order-1 print:order-1 md:col-span-4 print:col-span-4 space-y-8 md:space-y-12 print:space-y-12 border-t md:border-t-0 print:border-t-0 md:border-r print:border-r border-slate-100 pt-8 md:pt-0 print:pt-0 pr-0 md:pr-6 print:pr-6">

                        {/* Skills */}
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                                <Code2 size={14} /> Core Stack
                            </h2>
                            <div className="flex flex-wrap gap-1.5">
                                {PROFILE.skills.map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded uppercase">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                                <GraduationCap size={14} /> Qualifications
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 print:grid-cols-1 gap-4">
                                {PROFILE.qualifications.map((q, i) => (
                                    <div key={i} className="group">
                                        <p className="text-[11px] font-black text-slate-900 leading-tight">
                                            {q.degree}
                                        </p>
                                        <p className="text-[10px] text-slate-500 mt-0.5 uppercase font-bold tracking-tighter">
                                            {q.uni}
                                        </p>
                                        <p className="text-[10px] text-sky-600 font-bold mt-1 tracking-widest">
                                            {q.year}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Interests */}
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                                <Sparkles size={14} /> More Than Just Code
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-1 print:grid-cols-1 gap-2">
                                {HOBBIES.map((s, index) => {
                                    const Icon = ICON_MAP[s.icon];
                                    return (
                                        <div
                                            key={index}
                                            title={s.description}
                                            className="text-[11px] text-slate-500 hover:text-sky-600 flex items-center gap-2 transition-colors"
                                        >
                                            {Icon && <Icon size={14} className="opacity-70 shrink-0" />}
                                            {s.title}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Socials */}
                        <section className="">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2"><Globe size={14} /> Social</h2>
                            <div className="grid grid-cols-2 md:grid-cols-1 print:grid-cols-1 gap-2">
                                {PROFILE.socials.map((s) => (
                                    <a key={s.name} href={s.link} className="text-[11px] text-slate-500 hover:text-sky-600 flex items-center gap-2">
                                        {s.name === "Github" && <Github size={12} />}
                                        {s.name === "LinkedIn" && <Linkedin size={12} />}
                                        {s.name === "Instagram" && <Instagram size={12} />}
                                        {s.name === "WhatsApp" && <FaWhatsapp size={12} />}
                                        {s.name}
                                    </a>
                                ))}
                            </div>
                        </section>
                    </aside>

                    {/* --- Right Column (Main Content) --- */}
                    {/* FORCE PRINT ORDER: print:order-2 puts main content back on right */}
                    <section className="order-1 md:order-2 print:order-2 md:col-span-8 print:col-span-8 space-y-10">

                        {/* Work Experience */}
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Briefcase size={14} /> Professional Experience
                            </h2>
                            <div className="space-y-8">
                                {EXPERIENCE.filter(e => e.type === "Currently Serving").map((exp) => (
                                    <div key={exp.id} className="relative pl-4 border-l-2 border-slate-100">
                                        <div className="absolute -left-[7px] top-0 w-3 h-3 bg-white border-2 border-sky-500 rounded-full" />
                                        <div className="flex flex-col sm:flex-row print:flex-row justify-between sm:items-start print:items-start mb-1">
                                            <h3 className="text-lg font-bold text-slate-900 leading-none mb-1 sm:mb-0 print:mb-0">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest">{exp.duration}</span>
                                        </div>
                                        <p className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-tighter">{exp.company}</p>
                                        <p className="text-[12px] leading-relaxed text-slate-500 text-justify md:text-left print:text-left">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Achievements */}
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Award size={14} /> High-Scale Impact
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {ACHIEVEMENTS.slice(0, 5).map((ach) => (
                                    <div key={ach.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="flex flex-col sm:flex-row print:flex-row justify-between sm:items-center print:items-center mb-2 sm:mb-1 print:mb-1 gap-2 sm:gap-0 print:gap-0">
                                            <h4 className="text-sm font-bold text-slate-900">{ach.title}</h4>
                                            <span className="w-fit text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">{ach.tag}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-relaxed italic">
                                            {ach.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Major Projects */}
                        <section className="pt-2 md:pt-5 print:pt-5">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Code2 size={14} /> Key Projects
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {PROJECTS.slice(0, 5).map((project) => (
                                    <a href={project.link} key={project.id} className="group border-b border-slate-50 pb-4">
                                        <div className="flex flex-col sm:flex-row print:flex-row justify-between sm:items-center print:items-center mb-1">
                                            <h4 className="text-sm font-bold text-slate-900 flex flex-col sm:flex-row print:flex-row sm:items-center print:items-center gap-1">
                                                <span className="underline group-hover:text-sky-600 flex items-center gap-1">
                                                    {project.title} <ExternalLinkIcon size={12} className="hidden sm:inline print:inline" />
                                                </span>
                                                <span className="text-[9px] text-slate-400 font-normal sm:before:content-['•'] print:before:content-['•'] sm:before:mx-2 print:before:mx-2">
                                                    {project.client}
                                                </span>
                                            </h4>
                                            <span className="text-[10px] font-mono text-slate-400 mt-1 sm:mt-0 print:mt-0">{project.timeline}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 line-clamp-3 mb-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.slice(0, 8).map(tech => (
                                                <span key={tech} className="text-[8px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </a>
                                ))}
                                <a href="https://my-portfolio-two-peach-23.vercel.app/projects" target="_blank" className="text-[10px] text-indigo-600 underline italic mt-2 text-center">
                                    + {PROJECTS.length - 5} more large scale applications managed.
                                </a>
                            </div>
                        </section>
                    </section>
                </div>

                {/* --- Footer --- */}
                <footer className="mt-12 pt-6 border-t border-slate-100 text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                        Generated via <a href={PROFILE.portfolioLink} target="_blank" className="text-sky-600 hover:underline">my-portfolio.vercel.app</a> • Portfolio & Full Project Logs Available Online
                    </p>
                </footer>
            </div>

            <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            background: white !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>
        </main>
    );
}