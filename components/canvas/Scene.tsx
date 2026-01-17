"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload, Loader, Stars, Float } from "@react-three/drei";
import { Suspense } from "react";
import PhoneModel from "./PhoneModel";

export default function Scene() {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 40 }} // Adjusted FOV for more cinematic look
                gl={{ antialias: true, alpha: true, toneMappingExposure: 1.2 }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#4F46E5" />
                    <spotLight position={[-10, 0, 10]} angle={0.3} intensity={2} color="#EC4899" />

                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        <PhoneModel />
                    </Float>

                    {/* Background Elements */}
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <Environment preset="night" />
                    <Preload all />
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    );
}
