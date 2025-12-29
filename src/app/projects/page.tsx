"use client"
import Background from "@/components/Background";
import { PROJECTS } from "@/data/mock";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function FullProjects() {
    return (
        <main className="min-h-screen bg-[#0d1117] text-white p-10">
            <Background />
            <Link href="/" className="flex items-center gap-2 text-blue-500 mb-10"><ArrowLeft size={20} /> Back Home</Link>
            <h1 className="text-5xl font-bold mb-10">All Work</h1>
            <div className="grid md:grid-cols-3 gap-8">
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="min-w-full md:min-w-full bg-slate-900/20 border border-slate-700/50 rounded-3xl overflow-hidden backdrop-blur-sm group"
                    >
                        <div className="h-72 bg-slate-950 border-b border-slate-800">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
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
        </main>
    );
}