"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6 z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-300">AI Video Generation Live</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        Turn Long Videos into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Viral Reels</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        Automatically extract highlights, add captions, and format for TikTok & Instagram.
                        Create engaging short-form content in seconds with AI.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                        <Link href="/upload" className="w-full sm:w-auto">
                            <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                Generate Reels
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-all">
                            <PlayCircle className="w-5 h-5" />
                            Watch Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-600 overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <span className="block font-bold text-white">1000+ Creators</span>
                            <span className="text-gray-500">trust ReelAI daily</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right 3D Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[600px] w-full relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                    <Scene />
                </motion.div>
            </div>
        </section>
    );
}
