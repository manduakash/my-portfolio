"use client";
import React, { useRef } from "react";
import {
    Mail, Phone, MapPin, Globe, Github,
    Linkedin, Download, Printer, ExternalLink,
    Award, Briefcase, GraduationCap, Code2,
    ArrowLeft,
    Instagram
} from "lucide-react";
import { PROFILE, PROJECTS, EXPERIENCE, ACHIEVEMENTS } from "@/data/mock";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CVPage() {
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="min-h-screen bg-slate-50 py-10 print:py-0 print:bg-white">
            {/* --- Control Bar (Hidden on Print) --- */}
            <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center px-4 print:hidden">
                <h1 className="text-xl font-bold text-slate-800">Curriculum Vitae</h1>
                <div className="flex gap-3">
                    <Link
                        href={"/"}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-medium text-sm shadow-sm"
                    >
                        <ArrowLeft size={16} /> Go Back
                    </Link>
                    <button
                        onClick={handlePrint}
                        className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-sky-100 transition-all font-medium text-sm shadow-sm"
                    >
                        <Printer size={16} /> Print / Save as PDF
                    </button>
                </div>
            </div>

            {/* --- CV Container (A4 Paper) --- */}
            <div
                ref={printRef}
                className="mx-auto bg-white shadow-2xl print:shadow-none w-full max-w-[210mm] min-h-[297mm] p-[15mm] text-slate-800 font-sans"
            >
                {/* --- Header Section --- */}
                <header className="border-b-2 border-slate-800 pb-8 mb-8 flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter text-slate-900 uppercase">
                            {PROFILE.name}
                        </h1>
                        <p className="text-xl font-bold text-sky-600 mt-1 uppercase tracking-widest">
                            {PROFILE.role}
                        </p>
                        <p className="text-slate-500 mt-2 max-w-lg text-sm leading-relaxed italic">
                            "{PROFILE.bio}"
                        </p>
                    </div>

                    <div className="text-right space-y-1 text-sm">
                        <div className="flex items-center justify-end gap-2 text-slate-600">
                            <span>{PROFILE.email}</span> <Mail size={14} />
                        </div>
                        <div className="flex items-center justify-end gap-2 text-slate-600">
                            <span>{PROFILE.phone}</span> <Phone size={14} />
                        </div>
                        <div className="flex items-center justify-end gap-2 text-slate-600">
                            <span>{PROFILE.location}</span> <MapPin size={14} />
                        </div>
                        <div className="flex items-center justify-end gap-2 text-sky-600 font-bold pt-2">
                            <a href={PROFILE.portfolioLink} target="_blank" className="text-xs uppercase tracking-tighter hover:underline">My Portfolio</a> <Globe size={14} />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-10">
                    {/* --- Left Column (Sidebar) --- */}
                    <aside className="col-span-4 space-y-8 border-r border-slate-100 pr-6">

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
                                <GraduationCap size={14} /> Education
                            </h2>
                            <div className="space-y-4">
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

                        {/* Socials */}
                        <section className="print:hidden">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2"><Globe size={14} /> Social</h2>
                            <div className="grid grid-cols-1 gap-2">
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
                    <section className="col-span-8 space-y-10">

                        {/* Work Experience */}
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Briefcase size={14} /> Professional Experience
                            </h2>
                            <div className="space-y-8">
                                {EXPERIENCE.filter(e => e.type === "Currently Serving").map((exp) => (
                                    <div key={exp.id} className="relative pl-4 border-l-2 border-slate-100">
                                        <div className="absolute -left-[7px] top-0 w-3 h-3 bg-white border-2 border-sky-500 rounded-full" />
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-lg font-bold text-slate-900 leading-none">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest">{exp.duration}</span>
                                        </div>
                                        <p className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-tighter">{exp.company}</p>
                                        <p className="text-[12px] leading-relaxed text-slate-500">
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
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-sm font-bold text-slate-900">{ach.title}</h4>
                                            <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">{ach.tag}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-relaxed italic">
                                            {ach.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Major Projects (Concise for CV) */}
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Code2 size={14} /> Key Projects
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {PROJECTS.slice(0, 5).map((project) => (
                                    <div key={project.id} className="group border-b border-slate-50 pb-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-sm font-bold text-slate-900 flex flex-col">
                                                <span>{project.title}</span>
                                                <span className="text-[9px] text-slate-400 font-normal">{project.client}</span>
                                            </h4>
                                            <span className="text-[10px] font-mono text-slate-400">{project.timeline}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 line-clamp-3 mb-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.slice(0, 8).map(tech => (
                                                <span key={tech} className="text-[8px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <p className="text-[10px] text-slate-400 italic mt-2 text-center">
                                    + {PROJECTS.length - 5} more large scale government applications managed.
                                </p>
                            </div>
                        </section>
                    </section>
                </div>

                {/* --- Footer (Page Number / URL) --- */}
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