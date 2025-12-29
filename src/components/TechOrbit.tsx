"use client";
import React, { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    OrbitControls,
    Stars,
    Html,
    Billboard,
    Sparkles
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { PROFILE } from "@/data/mock";

// --- 1. The Emitting Amber Sun (The Center) ---
function Sun() {
    const sunCore = useRef<THREE.Mesh>(null!);
    const glowRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const s = 1 + Math.sin(t * 1.5) * 0.02;
        sunCore.current.scale.set(s, s, s);
        const gs = 1.4 + Math.sin(t * 1.5) * 0.05;
        glowRef.current.scale.set(gs, gs, gs);
    });

    return (
        <group>
            {/* CORE */}
            <mesh ref={sunCore}>
                <sphereGeometry args={[0.4, 64, 64]} />
                <meshStandardMaterial
                    emissive="#ffcc00"
                    emissiveIntensity={70}
                    toneMapped={false}
                    color="#ff8c00"
                />
            </mesh>

            {/* GLOW */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[1.2, 64, 64]} />
                <meshBasicMaterial
                    color="#ff4500"
                    transparent
                    opacity={0.005}
                    blending={THREE.AdditiveBlending}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* 🔥 RANDOM WAVY SOLAR FLARES */}
            <SolarFlares count={14} />

            <Sparkles count={40} scale={3} size={3} speed={0.3} color="#ffa500" />
            <pointLight intensity={12} color="#ff8c00" decay={1} distance={50} />
        </group>
    );
}

// --- 2. The Planetary Tech Icon ---
function TechPlanet({ name, distance, speed, offset }: any) {
    const planetRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        // All planets on the same ring move at the same speed 't'
        const t = state.clock.getElapsedTime() * speed + offset;
        planetRef.current.position.x = Math.cos(t) * distance;
        planetRef.current.position.z = Math.sin(t) * distance;
        planetRef.current.position.y = Math.sin(t * 0.4) * 0.3; // Slight bobbing
    });

    return (
        <group ref={planetRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>

                {/* THE TECH ICON */}
                <Billboard position={[0, 0, 0]}>
                    <Html center>
                        <div className="flex flex-col items-center group cursor-pointer select-none">
                            <div className="w-10 h-10 p-2 bg-white/20 backdrop-blur-md rounded-full border border-amber-500/30 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                                <img
                                    src={`https://api.iconify.design/logos:${name.toLowerCase().replace('.', '')}.svg`}
                                    alt={name}
                                    className="w-6 h-6 object-contain brightness-125"
                                    onError={(e: any) => e.target.src = 'https://api.iconify.design/lucide:code.svg?color=%23fbbf24'}
                                />
                            </div>
                            <div className="mt-2 px-2 py-1 bg-white/90 border border-white/10 rounded text-[7px] font-bold text-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                {name}
                            </div>
                        </div>
                    </Html>
                </Billboard>
            </Float>
        </group>
    );
}

export function BloomController() {

    return (
        <Bloom
            luminanceThreshold={0.1}
            mipmapBlur
            intensity={3.5}
            radius={0.6}
        />
    );
}


function SolarFlares({ count = 10 }) {
    const flares = useRef<THREE.Mesh[]>([]);
    const meta = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            angle: Math.random() * Math.PI * 90,
            tilt: Math.random() * Math.PI * 99,
            baseLength: 0.08 + Math.random() * 1.5,
            speed: 0.9 + Math.random() * 2,
            phase: Math.random() * Math.PI,
            thickness: 0.6 + Math.random() * 0.09,
        }));
    }, [count]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();

        flares.current.forEach((flare, i) => {
            if (!flare) return;
            const m = meta[i];

            // Smooth plasma-like wave
            const wave =
                Math.sin(t * m.speed + m.phase) * 0.4 +
                Math.sin(t * m.speed * 0.5 + m.phase) * 0.25;

            flare.scale.y = m.baseLength + wave;
            flare.rotation.z = wave * 0.35;

            const mat = flare.material as THREE.MeshBasicMaterial;
            mat.opacity = 0.08 + Math.abs(wave) * 0.12;
        });
    });

    return (
        <group>
            {meta.map((m, i) => (
                <mesh
                    key={i}
                    ref={(el) => (flares.current[i] = el!)}
                    rotation={[m.tilt, 0, m.angle]}
                >
                    {/* Tall, smooth flare */}
                    <cylinderGeometry
                        args={[m.thickness, m.thickness * 1.6, 1, 16, 8, true]}
                    />
                    <meshBasicMaterial
                        color="#ffd27d"
                        transparent
                        opacity={0.12}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </mesh>
            ))}
        </group>
    );
}




// --- 3. Main Scene Component ---
export default function TechOrbit() {
    // Logic to group multiple skills per orbit
    const groupedPlanets = useMemo(() => {
        const skills = PROFILE.skills;
        const itemsPerOrbit = 4; // Number of skills per ring
        const result: any[] = [];

        function random(seed: number) {
            return Math.abs(Math.sin(seed)) % 1;
        }

        skills.forEach((skill, i) => {
            const r1 = random(i * 10);
            const r2 = random(i * 20);
            const r3 = random(i * 30);

            result.push({
                name: skill,
                distance: 5 + r1 * 8,
                speed: 0.05 + r2 * 0.15,
                offset: r3 * 2 * Math.PI,
                orbitIndex: Math.floor(r1 * 4)
            });
        });


        return result;
    }, []);

    // Get unique orbit distances to draw the path rings once
    const uniqueOrbits = useMemo(() => {
        return Array.from(new Set(groupedPlanets.map(p => p.distance)));
    }, [groupedPlanets]);


    return (
        <div className="w-full h-[750px] relative bg-[#030712] overflow-hidden">
            <Canvas
                camera={{ position: [18, 8, 25], fov: 30 }}
                gl={{ powerPreference: "high-performance", antialias: false }}
            >
                <color attach="background" args={["#030712"]} />
                <ambientLight intensity={0.5} />

                <Suspense fallback={null}>
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <Sun />

                    {/* Draw the Orbital Path Rings (Once per group) */}
                    {uniqueOrbits.map((dist, idx) => (
                        <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[dist, 0.005, 16, 100]} />
                            <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
                        </mesh>
                    ))}

                    {/* Draw all the planets distributed across the rings */}
                    {groupedPlanets.map((p, i) => (
                        <TechPlanet key={i} {...p} />
                    ))}

                    <EffectComposer disableNormalPass>
                        <BloomController />
                    </EffectComposer>
                </Suspense>

                <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.3} />
            </Canvas>

            {/* Static UI Overlay */}
            <div className="absolute top-10 left-10 pointer-events-none">
                <div className="h-px w-12 bg-amber-500 mb-2" />
                <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em]">Orbital Intelligence</h4>
                <p className="text-slate-500 text-[8px] mt-1 italic">SYSTEM_DECENTRALIZED // {PROFILE.skills.length} NODES</p>
            </div>
        </div>
    );
}