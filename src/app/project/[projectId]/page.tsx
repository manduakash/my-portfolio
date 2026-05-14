"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe, User, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

// Import your shared data and components
import { PROJECTS } from "@/data/mock";

// Re-using your Background component for consistency
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
    </div>
);

export default function ProjectDetail() {
    const params = useParams();
    const router = useRouter();

    // Find the project based on the ID in the URL
    const project = PROJECTS.find((p) => p.id.toString() === params.projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white font-sans">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => router.push("/")} className="text-sky-400 flex items-center gap-2 mx-auto">
                        <ArrowLeft size={20} /> Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="relative min-h-screen text-slate-300 font-sans antialiased pb-20">
            <Background />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-[#0b1120]/70 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <button
                        onClick={() => router.back()}
                        className="text-white flex items-center gap-2 hover:text-sky-400 transition-colors font-bold text-sm"
                    >
                        <ArrowLeft size={18} /> BACK
                    </button>
                    <div className="hidden sm:block text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Project / {project.title}
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="pt-24 md:pt-32 md:max-w-5xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header */}
                    <div className="mb-8 md:mb-12">
                        <span className="text-sky-500 font-bold tracking-widest uppercase text-xs md:text-sm">
                            Featured Case Study
                        </span>
                        {/* Title scales from 3xl (mobile) to 7xl (desktop) */}
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mt-2 md:mt-4 tracking-tighter">
                            {project.title}
                        </h1>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-64 sm:h-[300px] md:h-[500px] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800 mb-8 md:mb-12">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
                    </div>

                    {/* Project Overview Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">

                        {/* Main Description Column */}
                        <div className="md:col-span-2">
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                                <CheckCircle className="text-sky-500" size={24} /> Project Overview
                            </h2>

                            {/* APPLIED CHANGE: text-base + leading-tight on mobile, text-xl + leading-relaxed on desktop */}
                            {/* Also switched mobile to text-left to prevent ugly spacing gaps in justified text on narrow screens */}
                            <p className="text-base md:text-xl leading-tight md:leading-relaxed text-slate-400 font-light text-left md:text-justify">
                                {project.detailed_description}
                            </p>
                        </div>

                        {/* Sidebar Info Box */}
                        <div className="space-y-6 md:space-y-8 bg-slate-900/30 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-800 backdrop-blur-sm h-fit">
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                                    <User size={14} /> Client
                                </label>
                                <p className="text-white font-bold text-sm md:text-base">{project.client}</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                                    <Globe size={14} /> Live Preview
                                </label>
                                <a href={project.link} className="text-sky-400 font-bold hover:underline flex items-center gap-1 text-sm md:text-base">
                                    Visit Website <ExternalLink size={14} />
                                </a>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                                    <Calendar size={14} /> Timeline
                                </label>
                                <p className="text-white font-bold text-sm md:text-base">{project.timeline}</p>
                            </div>
                        </div>
                    </div>

                    {/* Future sections (Tech Stack, Results etc) */}
                    <div className="border-t border-slate-800 pt-10 md:pt-16 pb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Technical Implementation</h3>

                        {/* Applied leading-tight here as well for consistency */}
                        <p className="text-slate-400 text-sm md:text-base leading-tight md:leading-relaxed mb-8 md:mb-10">
                            Built using a scalable architecture designed to handle high-frequency data updates.
                            Focused on minimizing latency and maximizing user engagement through intuitive UI patterns.
                        </p>

                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {project?.technologies?.map((tech) => (
                                <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-[10px] md:text-xs font-bold text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}