"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/well2.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      {/* Blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-600/8 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="section-label inline-flex mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Eta Chapter · UNC-Chapel Hill
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-none mb-6 animate-fade-up"
          style={{ animationFillMode: 'both' }}
        >
          Where Tech{" "}
          <span className="gradient-text">Meets</span>
          <br />
          Brotherhood.
        </h1>

        <p
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '150ms', animationFillMode: 'both', opacity: 0 }}
        >
          Kappa Theta Pi is UNC's first co-ed professional technology organization — building the next generation of leaders, engineers, and innovators.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '300ms', animationFillMode: 'both', opacity: 0 }}
        >
          <Link href="/recruitment" className="btn-primary">
            Apply Now
          </Link>
          <Link href="/about-us" className="btn-outline">
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
        <div className="scroll-indicator" />
      </div>
    </div>
  );
}
