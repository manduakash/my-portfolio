"use client";
import { motion } from "framer-motion";

export default function TechHero() {
    return (
        <div className="relative w-full max-w-[400px] h-[400px] hidden md:flex items-center justify-center">
            {/* Spinning SVG Circles */}
            <motion.svg
                viewBox="0 0 200 200" className="absolute w-full h-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="10 5" />
            </motion.svg>

            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="z-10"
            >
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-rose-500">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="Profile"
                        className="w-48 h-48 rounded-full bg-[#080808] object-cover border-4 border-[#080808]"
                    />
                </div>
            </motion.div>

            {/* Floating Tech Icons as SVGs */}
            {[0, 72, 144, 216, 288].map((degree, i) => (
                <motion.div
                    key={i}
                    className="absolute w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center"
                    animate={{
                        rotate: [0, 360],
                        x: Math.cos(degree) * 150,
                        y: Math.sin(degree) * 150,
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-4 h-4 bg-cyan-500/50 rounded-full animate-pulse" />
                </motion.div>
            ))}
        </div>
    );
}