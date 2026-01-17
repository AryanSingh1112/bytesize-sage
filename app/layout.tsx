import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// We can stick to standard fonts or the ones request, user said "Inter" or similar Google Fonts.
// Next.js has google fonts integration.
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Using Outfit for headings for that modern "startup" feel
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ReelAI - Video to Reels Platform",
  description: "Transform long videos into viral AI-generated reels in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
