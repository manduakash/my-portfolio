"use client";
import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/data/mock";
import { GraduationCap, Map, ShieldCheck, Zap, Trophy, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
    return (
        <section id="achievements" className="py-32 relative overflow-hidden bg-[#0b1120]/50">
            {/* Background Glows */}
            <div className="absolute top-1/2 right-0 w-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[80%] mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-green-400 font-bold text-xs tracking-[0.4em] uppercase mb-4">// Impact & Scale</h2>
                    <h3 className="text-5xl font-bold text-white tracking-tighter">Achievements</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {ACHIEVEMENTS.map((item, index) => {
                        const isLarge = item.id === 3;
                        const isSmall = item.id === 4;
                        const isXLarge = item.id === 5;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative flex flex-col bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-sky-500/30 transition-all duration-500 
                                    ${isLarge ? "md:col-span-4" : isSmall ? "md:col-span-2" : isXLarge ? "md:col-span-5 h-[600px]" : "md:col-span-3"}`}
                            >
                                {/* Image Background Layer */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all opacity-40 group-hover:opacity-60 duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                                </div>

                                <div className="relative z-10 p-10 flex flex-col h-full">
                                    {/* Header: Icon + Tag */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-sky-400">
                                            {item.id === 1 && <Map size={24} />}
                                            {item.id === 2 && <ShieldCheck size={24} />}
                                            {item.id === 3 && <GraduationCap size={24} />}
                                            {item.id === 4 && <Zap size={24} />}
                                            {item.id === 5 && <Trophy size={24} />}
                                        </div>
                                        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-lg bg-sky-500 text-black border-sky-400`}>
                                            {item.tag}
                                        </div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="mt-auto space-y-4">
                                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                                            <Calendar size={12} /> {item.date}
                                        </div>

                                        <h4 className={`${isLarge || isXLarge ? "text-4xl" : "text-2xl"} font-bold text-white tracking-tighter leading-none group-hover:text-sky-400 transition-colors`}>
                                            {item.title}
                                        </h4>

                                        <p className="text-sky-500/80 text-xs font-bold uppercase tracking-widest">
                                            {item.subtitle}
                                        </p>

                                        <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-3 max-w-2xl">
                                            {item.description}
                                        </p>

                                        {/* Large Item Stats */}
                                        {isLarge && (
                                            <div className="pt-6 border-t border-white/5 flex gap-10">
                                                <div>
                                                    <p className="text-3xl font-black text-white tracking-tighter">300k+</p>
                                                    <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">Digital Verifications</p>
                                                </div>
                                                <div>
                                                    <p className="text-3xl font-black text-white tracking-tighter">₹10,000</p>
                                                    <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">Direct Grant / Student</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-10">
                                        <Link
                                            href={`/achievements/${item.id}`}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/40 text-white hover:bg-sky-500 hover:text-black hover:border-sky-500 transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                                        >
                                            View Case Study <ArrowUpRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}