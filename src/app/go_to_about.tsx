"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-slate-900 py-24 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(59,130,246,0.3) 0%, transparent 60%)' }} />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          inView ? "animate-on-scroll in-view" : "animate-on-scroll"
        }`}
      >
        {/* Text */}
        <div>
          <div className="section-label">Our Story</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            UNC's First Co-Ed <span className="gradient-text">Tech Fraternity</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Kappa Theta Pi is the pioneering professional technology organization in the nation — founded on the belief that the best careers are built through both technical mastery and genuine human connection.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Our members represent every major, united by a shared passion for technology and an ambition to shape the future.
          </p>
          <Link href="/about-us" className="btn-primary">
            Our Story →
          </Link>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-48 lg:h-64">
            <img src="/about-us/group-pic.jpg" alt="KTP group" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="rounded-2xl overflow-hidden h-48 lg:h-64 mt-8">
            <img src="/about-us/image4.jpg" alt="KTP members" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="rounded-2xl overflow-hidden h-48 lg:h-64 -mt-8">
            <img src="/about-us/image1.JPG" alt="KTP event" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="rounded-2xl overflow-hidden h-48 lg:h-64">
            <img src="/about-us/image3.jpg" alt="KTP event" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}
