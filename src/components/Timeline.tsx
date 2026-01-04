"use client";
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/mock";
import { Briefcase, GraduationCap, Award, Calendar, DotIcon, ClockFading } from "lucide-react";
import { RiRadioButtonLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

export default function Timeline() {
    return (
        <div className="relative max-w-7xl mx-auto px-6">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-800 hidden md:block" />

            <div className="space-y-12">
                {EXPERIENCE.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex items-center justify-between w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"
                                } flex-col`}
                        >
                            {/* Desktop Gap Filler */}
                            <div className="hidden md:block w-[45%]" />

                            {/* Central Node */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-[#0b1120] border border-sky-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                                    {item.type === "Currently Serving" ? (
                                        <Briefcase size={16} className="text-emerald-400" />
                                    ) : item.type === "Served" ? (
                                        <ClockFading size={16} className="text-indigo-400" />
                                    ) : item.type === "Internship" ? (
                                        <GraduationCap size={16} className="text-amber-400" />
                                    ) : (
                                        <Award size={16} className="text-sky-400" />
                                    )}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[45%]">
                                <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm hover:border-sky-500/30 transition-all group relative">
                                    {/* Subtle Type Badge */}
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-flex justify-center items-center w-auto ${item.type === "Work" ? "text-sky-400 border-sky-500/20 bg-sky-500/5" :
                                        item.type === "Currently Serving" ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" :
                                            item.type === "Served" ? "text-indigo-400 border-indigo-500/20 bg-indigo-500/5" :
                                                item.type === "Internship" ? "text-amber-400 border-amber-500/20 bg-amber-500/5" :
                                                    "text-sky-400 border-sky-500/20 bg-sky-500/5"
                                        }`}>
                                        {item.type} {item.type === "Currently Serving" && <GoDotFill size={10} className="text-emerald-200 animate-caret-blink m-0 p-0 ml-1" />}
                                    </span>

                                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                        {item.role}
                                    </h3>
                                    <p className="text-slate-200 font-medium mb-2">{item.company}</p>

                                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-mono">
                                        <Calendar size={14} />
                                        {item.duration}
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <span key={skill} className="text-[10px] font-bold bg-slate-800 text-slate-400 px-2 py-1 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}