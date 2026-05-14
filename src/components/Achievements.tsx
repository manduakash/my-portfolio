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

            <div className="w-full mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="mb-10 md:mb-20 max-w-[95%] md:max-w-[80%] mx-auto">
                    <h2 className="text-green-400 font-bold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 md:mb-4">
                        // Impact & Scale
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                        Achievements
                    </h3>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-[95%] mx-auto">
                    {ACHIEVEMENTS.map((item, index) => {
                        // Grid Logic
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
                                className={`group relative flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl md:rounded-[2.5rem] overflow-hidden hover:border-sky-500/30 transition-all duration-500 
            ${/* Mobile: Default min-height for consistency. Desktop: Dynamic spans */ ''}
            min-h-[450px] md:min-h-0
            ${isLarge ? "md:col-span-4" : isSmall ? "md:col-span-2" : isXLarge ? "md:col-span-5 md:h-[600px]" : "md:col-span-3"}
          `}
                            >
                                {/* Image Background Layer */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all opacity-40 group-hover:opacity-60 duration-1000"
                                    />
                                    {/* Gradient adjusted for better text readability on mobile */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10 md:to-transparent" />
                                </div>

                                {/* Content Container - Adjusted padding for mobile */}
                                <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">

                                    {/* Header: Icon + Tag */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2.5 md:p-3 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 text-sky-400">
                                            {item.id === 1 && <Map size={20} className="md:w-6 md:h-6" />}
                                            {item.id === 2 && <ShieldCheck size={20} className="md:w-6 md:h-6" />}
                                            {item.id === 3 && <GraduationCap size={20} className="md:w-6 md:h-6" />}
                                            {item.id === 4 && <Zap size={20} className="md:w-6 md:h-6" />}
                                            {item.id === 5 && <Trophy size={20} className="md:w-6 md:h-6" />}
                                        </div>
                                        <div className="px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest border shadow-lg bg-sky-500 text-black border-sky-400">
                                            {item.tag}
                                        </div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="mt-auto space-y-3 md:space-y-4">
                                        <div className="flex items-center gap-2 text-slate-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                                            <Calendar size={12} /> {item.date}
                                        </div>

                                        {/* Dynamic Title Sizes based on Card Type & Screen Size */}
                                        <h4 className={`
                font-bold text-white tracking-tighter leading-none group-hover:text-sky-400 transition-colors
                ${(isLarge || isXLarge) ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}
              `}>
                                            {item.title}
                                        </h4>

                                        <p className="text-sky-500/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                            {item.subtitle}
                                        </p>

                                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light line-clamp-3 max-w-2xl">
                                            {item.description}
                                        </p>

                                        {/* Large Item Stats - Stack vertically on mobile, horizontal on desktop */}
                                        {isLarge && (
                                            <div className="pt-4 md:pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4">
                                                <div>
                                                    <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">300k+</p>
                                                    <p className="text-[8px] md:text-[9px] text-slate-500 uppercase font-bold tracking-widest">Digital Verifications</p>
                                                </div>
                                                <div>
                                                    <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">₹10,000</p>
                                                    <p className="text-[8px] md:text-[9px] text-slate-500 uppercase font-bold tracking-widest">Direct Grant / Student</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-6 md:mt-10">
                                        <Link
                                            href={`/achievements/${item.id}`}
                                            className="w-full md:w-auto inline-flex justify-center md:justify-start items-center gap-2 px-6 py-3 md:py-2.5 rounded-full border border-white/10 bg-white/40 text-white hover:bg-sky-500 hover:text-black hover:border-sky-500 transition-all duration-300 text-xs font-bold uppercase tracking-widest"
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