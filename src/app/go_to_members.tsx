"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import ImageReveal from "@/components/ui/image-tiles";

export default function MembersSection() {
  const { ref, inView } = useInView();

  return (
    <section className="overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${inView ? "visible" : ""}`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="max-w-2xl">
            <span className="eyebrow">Life At KTP</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy md:text-5xl">
              A little glimpse of the chapter outside the resume.
            </h2>
            <div className="section-divider" />
            <p className="text-lg leading-8 text-slate-600">
              From socials and retreats to everyday moments around campus, KTP feels just as much like a community as it does a professional org.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
            {["Tailgates", "Formals", "Late-night hangs"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-blue/15 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-[0_10px_25px_rgba(75,156,211,0.08)]"
              >
                {label}
              </span>
            ))}
            </div>
            <div className="mt-8">
              <Link href="/members" className="btn-outline-navy">
                Meet the People
              </Link>
            </div>
          </div>

          <div className="flex justify-center overflow-hidden">
            <ImageReveal
              leftImage="/carasoul/photo2.jpg"
              middleImage="/carasoul/photo5.JPG"
              rightImage="/carasoul/photo7.jpg"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <span className="eyebrow">Fall 2026 Recruitment</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy md:text-4xl">
            Applications Open Soon
          </h2>
          <div className="section-divider-center" />
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Recruitment returns in Fall 2026. Until then, take a look around and get a feel for what life in KTP is actually like.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/recruitment" className="btn-navy">
              View Recruitment Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
