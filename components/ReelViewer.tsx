"use client";

import { X, Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface ReelViewerProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    startTime: number;
    endTime: number; // For future usage if we want to loop a specific segment
}

export default function ReelViewer({ isOpen, onClose, videoSrc, startTime, endTime }: ReelViewerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.currentTime = startTime;
            videoRef.current.play().catch(() => { }); // Simple catch for autoplay policy
        }
    }, [isOpen, startTime, videoSrc]);

    // Loop manually if needed, or rely on user scrubbing. 
    // For MVP, just playing the video is enough. 
    // Advanced: Checking currentTime > endTime and seeking back.

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    {/* Mobile Frame Container */}
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="relative w-full max-w-[400px] aspect-[9/19] bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/20 rounded-full text-white hover:bg-black/50 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video */}
                        <video
                            ref={videoRef}
                            src={videoSrc} // We could append #t=start,end here but handled via ref for loop control ideally
                            className="w-full h-full object-cover bg-black"
                            loop
                            playsInline
                            autoPlay
                        />

                        {/* Overlay UI (Instagram/TikTok style) */}
                        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-4 bg-gradient-to-b from-transparent via-transparent to-black/80">
                            <div className="flex flex-col gap-4 mb-4">
                                <h3 className="font-bold text-white text-lg drop-shadow-md">Generated Reel</h3>
                                <p className="text-sm text-gray-200 line-clamp-2">
                                    Here is your AI generated highlight! 🔥 #viral #content #ai
                                </p>
                                <div className="flex items-center gap-2 text-xs text-white/80">
                                    <span>♫ Original Audio</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="absolute right-2 bottom-20 flex flex-col items-center gap-6 pointer-events-auto">
                            <div className="flex flex-col items-center gap-1">
                                <Heart className="w-8 h-8 text-white drop-shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                                <span className="text-xs font-medium text-white">12K</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <MessageCircle className="w-8 h-8 text-white drop-shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                                <span className="text-xs font-medium text-white">458</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Share2 className="w-8 h-8 text-white drop-shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                                <span className="text-xs font-medium text-white">Share</span>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
