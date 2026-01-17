"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-white/10 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Reel<span className="text-primary">AI</span></span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/#how-it-works" className="hover:text-foreground transition-colors">How it works</Link>
                    <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="/upload" className="text-primary hover:text-primary/80 transition-colors font-semibold">Upload</Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link href="/upload">
                        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
