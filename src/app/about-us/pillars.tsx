"use client";

import { useInView } from "@/hooks/useInView";
import {
  BriefcaseBusiness,
  GraduationCap,
  Martini,
  LaptopMinimal,
  BookOpenText,
} from "lucide-react";

const pillars = [
  {
    icon: BriefcaseBusiness,
    title: "Professional Development",
    desc: "Through interview training, resume help, one-on-one mentorship, and private company recruiting, KTP helps members feel ready for whatever direction they want to take in tech.",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Alumni Connections",
    desc: "Our alumni are all over the world working on cutting-edge technology at places like Microsoft, Amazon, Apple, Google, and Meta, along with startups, consulting firms, and more.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: Martini,
    title: "Social Growth",
    desc: "The people you meet in Kappa Theta Pi can easily become some of your closest friends. We host socials throughout the semester, from formals and tailgates to retreat, where people actually get to know each other.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: LaptopMinimal,
    title: "Technical Advancement",
    desc: "Kappa Theta Pi gives members a lot of chances to grow their technical skills. Whether it's through a project team or a workshop, we make it easier to build things that matter.",
    iconBg: "bg-blue-pale",
    iconColor: "text-blue",
  },
  {
    icon: BookOpenText,
    title: "Academic Support",
    desc: "KTP brothers look out for each other academically too. Members have a strong support system full of smart, helpful people who are down to help with classes and everything else piling up during the semester.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
  },
];

export default function Pillars() {
  const { ref, inView } = useInView();

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow">Our Pillars</span>
          <h2 className="text-3xl font-black text-navy md:text-4xl">
            What we stand for.
          </h2>
          <div className="section-divider" />
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            Kappa Theta Pi gives brothers real support during their time at UNC, centered around five core pillars.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
          {pillars.map(({ icon: Icon, title, desc, iconBg, iconColor }, i) => (
            <article
              key={title}
              className={`surface-hover-sheen rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_2px_12px_rgba(15,23,42,0.06)] ${i < 3 ? "xl:col-span-2" : "xl:col-span-3"} ${i === pillars.length - 1 ? "md:col-span-2" : ""} reveal reveal-delay-${(i % 4) + 1} ${inView ? "visible" : ""}`}
            >
              <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold leading-tight text-navy">
                {title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-slate-500">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
