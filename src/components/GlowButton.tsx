"use client";
import { useRef } from "react";
import confetti from "canvas-confetti";

export default function GlowButton({
    children,
    onClick,
    className,
}: {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}) {
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = btnRef.current;
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
        btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // Fire burst from button center
        confetti({
            particleCount: 30,
            spread: 60,
            startVelocity: 20,
            scalar: 0.75,
            gravity: 0.7,
            origin: {
                x: (rect.left + rect.width / 2) / window.innerWidth,
                y: (rect.top + rect.height / 2) / window.innerHeight,
            },
            colors: ["#38bdf8", "#6366f1", "#22d3ee"],
        });

    };

    return (
        <button
            ref={btnRef}
            onMouseMove={handleMove}
            onClick={handleClick}
            className={`
        group relative overflow-hidden rounded-full
        bg-slate-900 px-6 py-3
        text-sm font-semibold text-white
        shadow-lg shadow-black/40
        transition-all duration-300
        hover:-translate-y-0.5 hover:scale-[1.04]
        active:scale-95
        focus:outline-none
        ${className}
      `}
        >
            {/* Cursor glow */}
            <span
                className="
          pointer-events-none absolute -inset-24
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(56,189,248,0.35),transparent_60%)]
        "
            />

            {/* Text */}
            <span className="relative z-10">{children}</span>
        </button>
    );
}
