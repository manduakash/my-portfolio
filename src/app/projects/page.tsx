"use client"
import Background from "@/components/Background";
import { PROJECTS } from "@/data/mock";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function FullProjects() {
    return (
        // Changed p-10 to px-4 py-8 for mobile, reverting to p-10 on md screens
        <main className="min-h-screen bg-[#0d1117] text-white px-4 py-8 md:p-10 relative">
            <Background />

            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-blue-500 mb-6 md:mb-10 hover:text-blue-400 transition-colors text-sm md:text-base">
                    <ArrowLeft size={20} /> Back Home
                </Link>

                {/* Title scaled down for mobile */}
                <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">All Work</h1>

                {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="w-full bg-slate-900/20 border border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm group flex flex-col"
                        >
                            {/* Image Height: h-52 on mobile, h-72 on desktop */}
                            <div className="h-52 md:h-72 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                                />
                            </div>

                            {/* Content Padding: p-6 on mobile (was way too big at p-12), p-10 on desktop */}
                            <div className="p-6 md:p-10 flex flex-col h-full">
                                <span className="text-sky-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
                                    {project.client}
                                </span>

                                <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-sky-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description: leading-tight on mobile, relaxed on desktop. Font size scaled down. */}
                                <p className="text-slate-400 text-sm md:text-lg font-light leading-tight md:leading-relaxed mb-6 md:mb-10 line-clamp-4 md:line-clamp-none">
                                    {project.description}
                                </p>

                                {/* Button: Full width on mobile, auto on desktop */}
                                <div className="mt-auto">
                                    <Link
                                        href={`/project/${project.id}`}
                                        className="w-full md:w-auto inline-flex justify-center md:justify-start items-center gap-2 text-white font-bold text-sm bg-slate-800 px-6 py-3.5 md:py-3 rounded-xl hover:bg-sky-600 transition-colors"
                                    >
                                        Explore Project <ExternalLink size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}