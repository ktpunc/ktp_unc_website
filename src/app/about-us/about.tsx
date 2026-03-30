"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function AboutUs() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-slate-950 pt-28 pb-20 overflow-hidden mesh-bg">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${
          inView ? "animate-on-scroll in-view" : "animate-on-scroll"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">About Us</div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Who Are <span className="gradient-text">We?</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            The pioneering professional technology organization in the nation — and UNC's first co-ed tech org.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/about-us/image1.JPG", alt: "KTP event", className: "h-56 lg:h-72" },
              { src: "/about-us/image3.jpg", alt: "KTP members", className: "h-56 lg:h-72 mt-8" },
              { src: "/about-us/group-pic.jpg", alt: "KTP group", className: "h-56 lg:h-72 -mt-8 col-span-2" },
            ].map(({ src, alt, className }) => (
              <div key={src} className={`rounded-2xl overflow-hidden ${className}`}>
                <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 hover:scale-105" style={{ position: 'relative' }} width={600} height={400} />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="space-y-6">
            {[
              "Kappa Theta Pi stands as the pioneering professional technology organization in the nation and the first co-ed professional technology organization at UNC. Our core mission is to enhance the professional, social, and technical development of our members.",
              "Over the past four years, our organization has blossomed into a vibrant and supportive network that thrives on the unique backgrounds and shared passion for technology among our members. This diversity enriches our community, creating a powerful synergy of talents and perspectives.",
              "At Kappa Theta Pi, we view networking as more than professionalism — it is a journey built on friendship, trust, and camaraderie. Join us in shaping a legacy that blends a passion for technology with the power of genuine human connection.",
            ].map((text, i) => (
              <p key={i} className="text-slate-400 text-lg leading-relaxed">{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
