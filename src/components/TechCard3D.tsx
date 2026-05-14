"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Image, RoundedBox, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import { PROFILE } from "@/data/mock";

function FloatingCard() {
    const meshRef = useRef<THREE.Group>(null!);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        const { x, y } = state.mouse;
        if (meshRef.current) {
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.6, 0.1);
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.4, 0.1);
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={3} rotationIntensity={0.4} floatIntensity={1}>
                <RoundedBox args={[3.8, 2.4, 0.1]} radius={0.15} smoothness={4} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
                    <meshPhysicalMaterial color={hovered ? "#2563eb" : "#0f172a"} thickness={1.5} roughness={0.1} transmission={0.7} ior={1.2} opacity={0.9} transparent />
                </RoundedBox>

                <group position={[-1.1, 0, 0.08]}>
                    <Image url="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" scale={[1.3, 1.3]} transparent />
                </group>

                <Text position={[0.4, 0.6, 0.1]} fontSize={0.25} color="white" anchorX="left">{PROFILE.name.toUpperCase()}</Text>
                <Text position={[0.4, 0.2, 0.1]} fontSize={0.14} color="#60a5fa" anchorX="left">{PROFILE.company}</Text>
                <Text position={[0.4, -0.2, 0.1]} fontSize={0.11} color="#94a3b8" anchorX="left">SENIOR SOFTWARE DEVELOPER</Text>

                <mesh position={[0, 0, -0.1]}>
                    <torusGeometry args={[2.2, 0.01, 16, 100]} />
                    <MeshWobbleMaterial color="#3b82f6" speed={2} factor={0.5} opacity={0.2} transparent />
                </mesh>
            </Float>
        </group>
    );
}

export default function TechCard3D() {
    return (
        <div className="w-full h-[500px] flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                <FloatingCard />
            </Canvas>
        </div>
    );
}