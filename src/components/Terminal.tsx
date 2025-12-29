"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PROFILE, PROJECTS } from "@/data/mock";

export default function Terminal() {
    const [displayText, setDisplayText] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Plain Text Source (No HTML tags here)
    const fullCode = `const developer = {
  name: "${PROFILE.name}",
  role: "${PROFILE.role}",
  company: "${PROFILE.company}",
  experience: "${PROFILE.experience}",
  location: "${PROFILE.location}"
};

const technicalStack = [
  ${PROFILE.skills.map(s => `"${s}"`).join(",\n  ")}
];

const qualifications = [
${PROFILE.qualifications.map(q => `  {
    degree: "${q.degree}",
    institution: "${q.uni}",
    year: ${q.year}
  }`).join(",\n")}
];

const projects = [
${PROJECTS.map(p => `  {
    title: "${p.title}",
    client: "${p.client}",
    description: "${p.description.substring(0, 60)}...",
    link: "${p.link}"
  }`).join(",\n")}
];

/**
 * @status "Actively building at ${PROFILE.company}"
 */

export default developer;`;

    // 2. Typewriter Effect (Slicing PLAIN TEXT only)
    useEffect(() => {
        let currentIdx = 0;
        const typingInterval = setInterval(() => {
            if (currentIdx <= fullCode.length) {
                setDisplayText(fullCode.slice(0, currentIdx));
                currentIdx += 5; // Faster speed
                if (containerRef.current) {
                    containerRef.current.scrollTop = containerRef.current.scrollHeight;
                }
            } else {
                clearInterval(typingInterval);
            }
        }, 200);
        return () => clearInterval(typingInterval);
    }, [fullCode]);

    // 3. The Professional Highlighter (Single Pass)
    const highlightCode = (line: string) => {
        if (!line) return "&nbsp;";

        // This regex identifies Strings, Comments, Keywords, Numbers, and Keys in one go
        // This prevents "Double Replacing" which caused your previous error
        const regex = /("[^"]*"|'[^']*')|(\/\*[\s\S]*?\*\/|\/\/.*)|\b(const|export|default|return|let|var|function)\b|(\b\d+\b)|(\b\w+(?=\s*:))/g;

        return line.replace(regex, (match, string, comment, keyword, number, key) => {
            if (string) return `<span style="color: #a5d6ff;">${match}</span>`;
            if (comment) return `<span style="color: #8b949e; font-style: italic;">${match}</span>`;
            if (keyword) return `<span style="color: #ff7b72;">${match}</span>`;
            if (number) return `<span style="color: #f0883e;">${match}</span>`;
            if (key) return `<span style="color: #79c0ff;">${match}</span>`;
            return match;
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-2xl w-full lg:max-w-5xl mx-auto font-mono text-[14px]"
        >
            {/* GitHub Style Header */}
            <div className="bg-[#161b22] px-5 py-3 flex justify-between items-center border-b border-[#30363d]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[#8b949e] text-[10px] uppercase tracking-widest font-bold">profile.js</span>
            </div>

            {/* Editor Content */}
            <div
                ref={containerRef}
                className="p-8 h-[550px] overflow-y-auto no-scrollbar bg-[#0d1117]"
            >
                {displayText.split("\n").map((line, i) => (
                    <div key={i} className="flex gap-6 leading-relaxed">
                        <span className="text-[#484f58] w-8 select-none text-right shrink-0">{i + 1}</span>
                        <span
                            className="whitespace-pre text-[#c9d1d9]"
                            dangerouslySetInnerHTML={{ __html: highlightCode(line) }}
                        />
                    </div>
                ))}
                {/* Blinking Cursor */}
                <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[2px] h-4 bg-[#58a6ff] ml-[56px] translate-y-1"
                />
            </div>

            {/* Footer Bar */}
            <div className="bg-[#161b22] px-6 py-2 border-t border-[#30363d] flex justify-between items-center text-[10px] text-[#8b949e]">
                <div className="flex gap-4">
                    <span>JavaScript</span>
                    <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#238636]" />
                    <span>Connected</span>
                </div>
            </div>
        </motion.div>
    );
}