"use client";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#0b1120] overflow-hidden">
            {/* 1. The Tailwind Grid Pattern */}
            {/* This creates the sharp, subtle lines/dots that fade out at the bottom */}
            <div
                className="absolute inset-0 z-0 opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 40 L40 40 L40 0' fill='none' stroke='%23334155' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 2. Primary Static Glow (Top Center) */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />

            {/* 3. Secondary Static Glow (Bottom Left) */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* 4. Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1120]/50 to-[#0b1120]" />
        </div>
    );
}