"use client";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center reveal ${inView ? "visible" : ""}`}
      >
        {/* Text */}
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight mb-3">
            UNC's First Co-Ed<br />Tech Fraternity
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Founded in 2012, KTP is a co-ed professional technology fraternity. Our members come from all over campus spanning Computer Science, Journalism, Psychology, Business, Studio Art, Sports Medicine, and more, united by a shared passion for technology and a community that genuinely looks out for each other.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/about-us" className="btn-navy">Our Story</Link>
            <Link href="/members" className="btn-outline-navy">Meet Our Members</Link>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image src="/about-us/group-pic.jpg" alt="KTP group" fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 22vw" className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="relative mt-6 aspect-[3/4] overflow-hidden rounded-lg">
            <Image src="/about-us/image4.jpg" alt="KTP members" fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 22vw" className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="relative -mt-6 aspect-[3/4] overflow-hidden rounded-lg">
            <Image src="/about-us/image1.JPG" alt="KTP event" fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 22vw" className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image src="/about-us/image3.jpg" alt="KTP event" fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 22vw" className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}
