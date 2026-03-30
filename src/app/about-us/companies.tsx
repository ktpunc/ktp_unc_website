"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Companies() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-12 ${inView ? "animate-on-scroll in-view" : "animate-on-scroll"}`}
        >
          <div className="section-label">Alumni Network</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Where Our Alumni Work
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            KTP members land at the world's most influential companies.
          </p>
        </div>

        <div
          className={`glass rounded-3xl p-8 md:p-12 ${inView ? "animate-on-scroll in-view" : "animate-on-scroll"}`}
          style={{ transitionDelay: '150ms' }}
        >
          <Image
            src="/image/companies.png"
            alt="Companies where KTP alumni work"
            width={1600}
            height={600}
            className="w-full h-auto rounded-xl"
            style={{ filter: 'brightness(0.9) contrast(1.1)' }}
          />
        </div>
      </div>
    </section>
  );
}
