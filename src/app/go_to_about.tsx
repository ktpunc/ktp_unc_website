"use client";
import Link from "next/link";
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
          <p className="text-slate-500 text-lg leading-relaxed mb-4">
            Kappa Theta Pi is the pioneering professional technology organization in the nation — founded on the belief that the best careers are built through both technical mastery and genuine human connection.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Our members come from every major, united by a shared passion for technology and an ambition to shape what's next.
          </p>
          <Link href="/about-us" className="btn-navy">Our Story</Link>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg overflow-hidden h-44 md:h-56">
            <img src="/about-us/group-pic.jpg" alt="KTP group" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-lg overflow-hidden h-44 md:h-56 mt-6">
            <img src="/about-us/image4.jpg" alt="KTP members" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-lg overflow-hidden h-44 md:h-56 -mt-6">
            <img src="/about-us/image1.JPG" alt="KTP event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-lg overflow-hidden h-44 md:h-56">
            <img src="/about-us/image3.jpg" alt="KTP event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
