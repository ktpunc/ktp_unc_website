"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function AboutUs() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <div className="mb-16">
          <span className="eyebrow">About Us</span>
          <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight">
            Who Are We?
          </h1>
          <div className="section-divider" />
          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            The pioneering professional technology organization in the nation — and UNC's first co-ed tech org.
          </p>
        </div>

        {/* Content */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start reveal ${inView ? "visible" : ""}`}
        >
          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-lg overflow-hidden h-52 md:h-64">
              <Image src="/about-us/image1.JPG" alt="KTP event" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-lg overflow-hidden h-52 md:h-64 mt-8">
              <Image src="/about-us/image3.jpg" alt="KTP members" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-lg overflow-hidden h-52 md:h-64 -mt-8 col-span-2">
              <Image src="/about-us/group-pic.jpg" alt="KTP group" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            {[
              "Kappa Theta Pi stands as the pioneering professional technology organization in the nation and the first co-ed professional technology organization at UNC. Our core mission is to enhance the professional, social, and technical development of our members.",
              "Over the past four years, our organization has blossomed into a vibrant and supportive network that thrives on the unique backgrounds and shared passion for technology among our members. This diversity enriches our community, creating a powerful synergy of talents and perspectives.",
              "At Kappa Theta Pi, we view networking as more than professionalism — it is a journey built on friendship, trust, and camaraderie. Join us in shaping a legacy that blends a passion for technology with the power of genuine human connection.",
            ].map((text, i) => (
              <p key={i} className="text-slate-500 text-lg leading-relaxed">{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
