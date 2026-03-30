"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function MembersSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/carasoul/photo5.JPG')" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(19,41,75,0.90) 0%, rgba(19,41,75,0.55) 100%)" }} />

      <div
        ref={ref}
        className={`relative z-10 text-center px-6 max-w-2xl mx-auto reveal ${inView ? "visible" : ""}`}
      >
        <span className="eyebrow" style={{ color: '#7BBDE4' }}>Meet the Chapter</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Our Memberhood</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          50+ self-driven, ambitious members from every corner of UNC — meet the people who make KTP truly special.
        </p>
        <Link href="/members" className="btn-blue">Meet Our Members</Link>
      </div>
    </section>
  );
}
