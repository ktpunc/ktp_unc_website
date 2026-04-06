"use client";
import { useInView } from "@/hooks/useInView";
import ImageTilesVertical from "@/components/ui/image-tiles-vertical";

export default function AboutUs() {
  const { ref, inView } = useInView();

  return (
    <section className="overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)] pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start reveal ${inView ? "visible" : ""}`}
        >
          <div className="relative mx-auto w-full max-w-[33rem]">
            <div className="absolute -left-5 top-8 hidden h-24 w-24 rounded-full bg-blue/10 blur-3xl lg:block" />
            <div className="absolute -right-4 bottom-0 hidden h-32 w-32 rounded-full bg-blue-light/10 blur-3xl lg:block" />
            <ImageTilesVertical
              topLeftImage="/about-us/image1.JPG"
              topRightImage="/about-us/image3.jpg"
              bottomLeftImage="/about-us/image4.jpg"
              bottomRightImage="/about-us/group-pic.jpg"
            />
          </div>

          <div className="surface-hover-sheen rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)] md:p-8">
            <span className="eyebrow">Who We Are</span>
            <h2 className="text-3xl font-black tracking-tight text-navy md:text-4xl">
              UNC&apos;s first co-ed professional technology fraternity.
            </h2>
            <div className="section-divider" />

            <div className="space-y-5">
            {[
              "KTP was founded in 2012 as the first professional technology fraternity in the country. We're a co-ed organization, and since then we've grown into a tight-knit community built around a shared passion for technology.",
              "Our members come from all over campus, spanning Computer Science, Business, Journalism, Psychology, Biology, Studio Art, Hispanic Studies, Economics, and more. The variety of backgrounds and perspectives is a big part of what makes the community strong.",
              "Our alumni are spread across the country, at companies like Microsoft, Amazon, and Google as well as all kinds of startups. A lot of them stay in touch and are happy to help current members however they can.",
            ].map((text, i) => (
              <p key={i} className="text-slate-500 text-lg leading-relaxed">{text}</p>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
