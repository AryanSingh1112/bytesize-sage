"use client";

import { useState, useRef } from "react";
import { Upload, Sparkles, Youtube, Link as LinkIcon, FileVideo, CheckCircle2, Loader2, ArrowRight, Play, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ReelViewer from "./ReelViewer";

export default function FeatureSection() {
    const [step, setStep] = useState<"upload" | "processing" | "results">("upload");
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [generatedReels, setGeneratedReels] = useState<any[]>([]);

    // Viewer State
    const [viewerOpen, setViewerOpen] = useState(false);
    const [activeReel, setActiveReel] = useState<any>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setVideoFile(file);
            setVideoSrc(URL.createObjectURL(file));
        }
    };

    const handleGenerate = () => {
        if (!videoFile && !videoSrc) return;

        setStep("processing");

        // Simulate AI Processing
        setTimeout(() => {
            // Mock Data Generation
            const clips = [
                {
                    id: 1,
                    title: "Viral Hook 🪝",
                    caption: "Can't believe this happened! 😱 #viral #start",
                    start: 0,
                    end: 5
                },
                {
                    id: 2,
                    title: "Key Insight 💡",
                    caption: "This changes everything. 🧠 #tech #future #ai",
                    start: 10,
                    end: 15
                },
                {
                    id: 3,
                    title: "Funny Moment 😂",
                    caption: "Wait for the reaction! LOL. #fail #funny",
                    start: 25,
                    end: 30
                },
                {
                    id: 4,
                    title: "Conclusion 🎬",
                    caption: "Summary in 5 seconds. 📌 #summary #learning",
                    start: 40,
                    end: 45
                },
            ];
            setGeneratedReels(clips);
            setStep("results");
        }, 2500);
    };

    const openReel = (reel: any) => {
        setActiveReel(reel);
        setViewerOpen(true);
    };

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto" id="generate">

            <ReelViewer
                isOpen={viewerOpen}
                onClose={() => setViewerOpen(false)}
                videoSrc={videoSrc || ""}
                startTime={activeReel?.start || 0}
                endTime={activeReel?.end || 0}
            />

            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Create Magic in Seconds</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Upload a video. Our AI will analyze the content, pick the viral moments, and reframe them instantly.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20" />

                <AnimatePresence mode="wait">
                    {step === "upload" && (
                        <motion.div
                            key="upload"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col gap-8"
                        >
                            {/* Input Area */}
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="h-64 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer relative overflow-hidden"
                            >
                                {/* Hidden File Input */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="video/*"
                                    onChange={handleFileSelect}
                                />

                                {videoFile ? (
                                    <div className="flex flex-col items-center z-10">
                                        <FileVideo className="w-16 h-16 text-blue-500 mb-4" />
                                        <p className="text-xl font-bold">{videoFile.name}</p>
                                        <p className="text-sm text-gray-400 mt-1">{(videoFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                        <p className="text-xs text-green-500 mt-2">Ready to process</p>
                                    </div>
                                ) : (
                                    <div className="text-center z-10">
                                        <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4 group-hover:text-blue-400 transition-colors" />
                                        <p className="text-lg font-medium">Drag & drop or Click to Upload</p>
                                        <p className="text-sm text-gray-500 mt-2">MP4, MOV up to 1GB</p>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={handleGenerate}
                                    disabled={!videoFile && !videoSrc}
                                    className="flex items-center gap-2 bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                                >
                                    <Sparkles className="w-5 h-5 fill-white" />
                                    Generate Reels
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === "processing" && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-12 gap-6"
                        >
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 border-4 border-l-blue-500 border-t-purple-500 border-r-transparent border-b-transparent rounded-full animate-spin" />
                                <div className="absolute inset-2 border-4 border-r-blue-400 border-b-purple-400 border-t-transparent border-l-transparent rounded-full animate-spin-reverse" />
                                <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-white animate-pulse" />
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-bold">Analyzing Video Content...</h3>
                                <p className="text-gray-400">Identifying viral moments in <span className="text-white font-medium">{videoFile?.name}</span></p>
                            </div>
                        </motion.div>
                    )}

                    {step === "results" && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                    <div>
                                        <h3 className="text-xl font-bold">Generation Complete!</h3>
                                        <p className="text-muted-foreground text-sm">4 Ready-to-post reels created.</p>
                                    </div>
                                </div>
                                <button onClick={() => { setStep("upload"); setVideoFile(null); setGeneratedReels([]); }} className="text-sm text-gray-400 hover:text-white underline">Start Over</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {generatedReels.map((reel) => (
                                    <div key={reel.id} onClick={() => openReel(reel)} className="bg-black/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all group cursor-pointer hover:shadow-2xl hover:shadow-blue-900/10">
                                        <div className="aspect-[9/16] bg-gray-900 relative group-hover:opacity-90 transition-opacity flex items-center justify-center overflow-hidden">
                                            {/* Video Preview using #t fragment for simple segmentation preview */}
                                            {videoSrc && (
                                                <video
                                                    src={`${videoSrc}#t=${reel.start},${reel.end}`}
                                                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                                                    muted
                                                    preload="metadata"
                                                    onMouseOver={(e) => e.currentTarget.play()}
                                                    onMouseOut={(e) => e.currentTarget.pause()}
                                                />
                                            )}

                                            {/* Card Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4 pointer-events-none">
                                                <h4 className="font-bold text-white mb-1 line-clamp-1">{reel.title}</h4>
                                                <p className="text-xs text-gray-300 line-clamp-2">{reel.caption}</p>
                                                <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-400">
                                                    <span>Length: 5s</span>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                                    <Play className="w-6 h-6 text-white fill-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
