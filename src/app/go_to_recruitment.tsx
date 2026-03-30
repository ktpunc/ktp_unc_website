"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function RecruitmentSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Gradient bg */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.15) 0%, rgba(2,6,23,1) 50%, rgba(29,78,216,0.1) 100%)' }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center ${
          inView ? "animate-on-scroll in-view" : "animate-on-scroll"
        }`}
      >
        <div className="section-label">Spring Recruitment</div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          Ready to Join?
        </h2>
        <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Open to all UNC undergraduates with a passion for technology. No specific major required — just ambition and curiosity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/recruitment" className="btn-primary text-base px-8 py-3.5">
            View Recruitment Schedule
          </Link>
          <Link href="/faq" className="btn-outline text-base px-8 py-3.5">
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
