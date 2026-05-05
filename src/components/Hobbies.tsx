"use client";
import React from "react";
import { motion } from "framer-motion";
import { Compass, Cpu, Palette, Utensils, Music, Dumbbell } from "lucide-react";
import { HOBBIES } from "@/data/mock";

const ICON_MAP: Record<string, React.ElementType> = {
    tech: Cpu,
    uiux: Palette,
    travel: Compass,
    music: Music,
    gym: Dumbbell,
    cooking: Utensils,
};

const SPAN_MAP: Record<string, string> = {
    tech: "md:col-span-1 md:row-span-1",
    uiux: "md:col-span-1 md:row-span-1",
    travel: "md:col-span-1 md:row-span-2",
    music: "md:col-span-1 md:row-span-2",
    gym: "md:col-span-1 md:row-span-2",
    cooking: "md:col-span-1 md:row-span-1",
};

const hobbies = HOBBIES.map((hobby) => {
    const Icon = ICON_MAP[hobby.icon];

    return {
        ...hobby,
        icon: Icon ? <Icon size={20} /> : null,
        span: SPAN_MAP[hobby.icon] ?? "md:col-span-1 md:row-span-1",
    };
});


export default function Hobbies() {
    return (
        <section id="hobbies" className="py-32 px-6 bg-[#0b1120]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-green-400 font-bold text-xs tracking-[0.4em] uppercase mb-4">// Beyond the Screen</h2>
                    <h3 className="text-5xl font-bold text-white tracking-tighter">Interests & Hobbies</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 ${hobby.span}`}
                        >
                            {/* --- Background Image --- */}
                            <img
                                src={hobby.image}
                                alt={hobby.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                            />

                            {/* --- Black-to-Transparent Gradient Overlay --- */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                            {/* --- Content --- */}
                            <div className="relative z-20 h-full p-8 flex flex-col justify-end">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-sky-400 group-hover:scale-110 transition-transform">
                                        {hobby.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white tracking-tight">
                                        {hobby.title}
                                    </h4>
                                </div>

                                <p className="text-slate-400 text-sm font-light leading-relaxed max-w-[280px] group-hover:text-slate-200 transition-colors">
                                    {hobby.description}
                                </p>
                            </div>

                            {/* Subtle Inner Glow on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_80px_rgba(59,130,246,0.2)]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}