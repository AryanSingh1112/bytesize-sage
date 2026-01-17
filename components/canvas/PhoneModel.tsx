"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useVideoTexture, Html } from "@react-three/drei";
import * as THREE from "three";
import { Heart, Eye, Smartphone } from "lucide-react";

export default function PhoneModel() {
    const group = useRef<THREE.Group>(null);

    // Floating animation
    useFrame((state) => {
        if (group.current) {
            const t = state.clock.getElapsedTime();
            group.current.position.y = Math.sin(t * 0.5) * 0.15; // Increased float range
            group.current.rotation.z = Math.sin(t * 0.3) * 0.02;
        }
    });

    // Video Texture
    // Using a reliable sample video
    const videoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

    // Create a texture or fallback color
    let texture = null;
    try {
        texture = useVideoTexture(videoUrl, {
            unsuspend: 'canplay',
            muted: true,
            loop: true,
            start: true,
            crossOrigin: "Anonymous",
        });
    } catch (e) {
        console.warn("Video texture failed to load", e);
    }

    return (
        <group ref={group}>
            {/* Phone Body - Titanium Finish */}
            <RoundedBox args={[2.3, 4.8, 0.15]} radius={0.15} smoothness={8}>
                <meshStandardMaterial
                    color="#1a1a1a"
                    roughness={0.15}
                    metalness={0.95}
                    envMapIntensity={1.5}
                />
            </RoundedBox>

            {/* Screen Area - Bezel-less Glass */}
            <mesh position={[0, 0, 0.08]}>
                <planeGeometry args={[2.25, 4.75]} />
                {texture ? (
                    <meshBasicMaterial map={texture} toneMapped={false} />
                ) : (
                    <meshBasicMaterial color="#000" />
                )}

                {/* UI Overlay */}
                <Html
                    transform
                    wrapperClass="phone-ui"
                    position={[0, 0, 0.01]}
                    distanceFactor={1.5}
                    className="w-[330px] h-[705px] pointer-events-none flex flex-col justify-between p-6 text-white select-none"
                >
                    {/* Top Gradient for readability */}
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/60 to-transparent" />

                    <div className="relative z-10 w-full flex justify-between items-start pt-2">
                        <div className="bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            <span className="text-[10px] font-bold">LIVE REEL</span>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />

                    <div className="relative z-10 flex flex-col gap-3 pb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                                <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm shadow-black drop-shadow-md">@tech_innovator</span>
                                <span className="text-[10px] opacity-80">Original Audio</span>
                            </div>
                        </div>

                        <p className="text-sm font-medium leading-relaxed drop-shadow-md max-w-[85%]">
                            POV: You just discovered the easiest way to make viral reels with AI 🚀 #Future #Tech
                        </p>

                        <div className="flex items-center gap-6 mt-2">
                            <div className="flex items-center gap-1.5">
                                <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                                <span className="font-bold text-xs">84.2K</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Eye className="w-5 h-5 text-white" />
                                <span className="font-bold text-xs">1.2M</span>
                            </div>
                        </div>
                    </div>

                    {/* Side Actions */}
                    <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center z-10">
                        <div className="flex flex-col items-center gap-1">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[10px] font-medium">Like</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                                <Smartphone className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[10px] font-medium">Use</span>
                        </div>
                    </div>

                </Html>
            </mesh>

            {/* Side Glow using a slightly larger plane behind */}
            <mesh position={[0, 0, -0.05]}>
                <planeGeometry args={[2.5, 5]} />
                <meshBasicMaterial color="#3B82F6" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>

        </group>
    );
}
