import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HomeContent />

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 text-center text-sm text-gray-500">
        <p>© 2026 ReelAI. Built for High-Performance Demo.</p>
      </footer>
    </main>
  );
}
