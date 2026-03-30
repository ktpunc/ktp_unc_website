"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Companies() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-blue-pale py-20 border-t border-blue-mid">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className={`reveal ${inView ? "visible" : ""}`}>
          <div className="mb-10">
            <span className="eyebrow">Alumni Network</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy">Where Our Alumni Work</h2>
            <div className="section-divider" />
            <p className="text-slate-500 text-lg max-w-xl">KTP members land at the world's most influential companies.</p>
          </div>
          <div className="card p-6 md:p-10">
            <Image
              src="/image/companies.png"
              alt="Companies where KTP alumni work"
              width={1600}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
