"use client";
import React from "react";
import { motion } from "framer-motion";
import { Compass, Cpu, Palette, Utensils, Music, Dumbbell } from "lucide-react";

const hobbies = [
    {
        title: "Learning New Technologies",
        description: "Exploring modern tools, frameworks, and best practices to stay up to date in the tech ecosystem.",
        image: "/hobbies/tech.jpg",
        icon: <Cpu size={20} />,
        span: "md:col-span-1 md:row-span-1",
    },
    {
        title: "UI/UX Exploration",
        description: "Designing intuitive interfaces and research.",
        image: "/hobbies/uiux.jpg",
        icon: <Palette size={20} />,
        span: "md:col-span-1 md:row-span-1", // Large horizontal card
    },
    {
        title: "Traveling",
        description: "Visiting new places and gaining fresh perspectives.",
        image: "/hobbies/travel.png",
        icon: <Compass size={20} />,
        span: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Guitar",
        description: "Playing guitar to relax and improve creativity.",
        image: "/hobbies/guitar.png",
        icon: <Music size={20} />,
        span: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Gym",
        description: "Maintaining physical fitness and discipline through regular training.",
        image: "/hobbies/gym.jpg",
        icon: <Dumbbell size={20} />,
        span: "md:col-span-1 md:row-span-2", // Vertical tall card
    },
    {
        title: "Cooking",
        description: "Experimenting with recipes to create enjoyable homemade meals.",
        image: "/hobbies/cooking.jpg",
        icon: <Utensils size={20} />,
        span: "md:col-span-1 md:row-span-1", // Large horizontal card
    },
];

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