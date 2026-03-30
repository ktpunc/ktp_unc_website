"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image/well2.jpg')" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(19,41,75,0.72) 0%, rgba(19,41,75,0.55) 60%, rgba(19,41,75,0.82) 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="eyebrow" style={{ color: '#7BBDE4' }}>Eta Chapter · UNC-Chapel Hill</span>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 animate-fade-up"
          style={{ animationFillMode: "both" }}
        >
          Where Technology<br />
          <span style={{ color: "#7BBDE4" }}>Meets Brotherhood.</span>
        </h1>

        <p
          className="text-lg text-white/75 max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "120ms", animationFillMode: "both", opacity: 0 }}
        >
          UNC's first co-ed professional technology organization — building the next generation of leaders at the intersection of tech and community.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "240ms", animationFillMode: "both", opacity: 0 }}
        >
          <Link href="/recruitment" className="btn-blue px-7 py-3">Apply for Fall 2026</Link>
          <Link href="/about-us" className="btn-outline-white px-7 py-3">Learn More</Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-50">
        <span className="text-white text-[10px] tracking-[0.15em] uppercase">Scroll</span>
        <div className="scroll-indicator" />
      </div>
    </div>
  );
}
