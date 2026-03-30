"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function RecruitmentSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-blue-pale py-20 border-y border-blue-mid">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center reveal ${inView ? "visible" : ""}`}
      >
        <span className="eyebrow">Fall 2026 Recruitment</span>
        <h2 className="text-3xl md:text-4xl font-black text-navy mb-3">Ready to Join?</h2>
        <div className="section-divider-center" />
        <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Open to all UNC undergraduates with a passion for technology. No specific major required — just ambition, curiosity, and a 2.5+ GPA.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/recruitment" className="btn-navy">View Recruitment Info</Link>
          <Link href="/faq" className="btn-outline-navy">Read the FAQ</Link>
        </div>
      </div>
    </section>
  );
}
