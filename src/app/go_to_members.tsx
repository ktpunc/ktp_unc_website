"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function MembersSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/carasoul/photo1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />

      <div
        ref={ref}
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto ${
          inView ? "animate-on-scroll in-view" : "animate-on-scroll"
        }`}
      >
        <div className="section-label">Meet the Chapter</div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          Our Memberhood
        </h2>
        <p className="text-slate-300 text-xl leading-relaxed mb-10">
          50+ self-driven, ambitious members from every corner of UNC. Meet the people who make KTP truly special.
        </p>
        <Link href="/members" className="btn-primary text-base px-8 py-3.5">
          Meet Our Members
        </Link>
      </div>
    </section>
  );
}
