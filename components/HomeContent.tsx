"use client";

import { Zap, Brain, Share2, Layers } from "lucide-react";

export default function HomeContent() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-24">

            {/* How It Works */}
            <section id="how-it-works" className="py-20 border-t border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-400">From long-form to short-form in three simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Upload Video", desc: "Paste a YouTube link or upload a file up to 1GB." },
                        { step: "02", title: "AI Analysis", desc: "Our AI identifies the most viral moments and hooks." },
                        { step: "03", title: "Get Reels", desc: "Download ready-to-post vertical videos with captions." }
                    ].map((item) => (
                        <div key={item.step} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-500/30 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative text-5xl font-bold text-white/10 mb-4 block group-hover:text-blue-500/20 transition-colors">{item.step}</span>
                            <h3 className="relative text-xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="relative text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Creators,<br />Powered by AI</h2>
                        <div className="space-y-8">
                            {[
                                { icon: Zap, title: "Lightning Fast", desc: "Process hour-long videos in minutes." },
                                { icon: Brain, title: "Smart Context", desc: "AI understands context to keep clips coherent." },
                                { icon: Share2, title: "Social Ready", desc: "Auto-resized 9:16 with trend-aware captions." },
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl p-1 border border-white/10">
                        <div className="bg-black/80 backdrop-blur-xl rounded-[22px] p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                            {/* Abstract decorative element representing AI processing */}
                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl animate-pulse" />
                            <Layers className="w-32 h-32 text-white/20" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
