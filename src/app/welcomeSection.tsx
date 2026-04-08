"use client";

import { Briefcase, Building2, Laptop, Network, UsersRound } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const stats = [
  {
    value: "80+ active members",
    label: "A brotherhood you'll actually know",
    detail: "Big enough that you'll keep meeting new people, small enough that it feels like a real community.",
    icon: UsersRound,
  },
  {
    value: "15+ majors represented",
    label: "Diverse backgrounds, shared passion",
    detail: "Our members come from CS, business, statistics, information science, economics, and beyond, all brought together by a love of technology.",
    icon: Network,
  },
  {
    value: "500+ national alumni",
    label: "A network that opens doors",
    detail: "Our alumni are spread across the country, working at companies like Microsoft, Amazon, Apple, Google, and more.",
    icon: Building2,
  },
];

const pillars = [
  {
    icon: Briefcase,
    title: "Professional Development",
    desc: "Through interview training, resume building, one-on-one mentorship, and private company recruiting, KTP prepares members for success in any technology-related career.",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    icon: Laptop,
    title: "Technical Advancement",
    desc: "Whether it's building with a hackathon team, showing up to technical workshops, or learning from other members, KTP gives people real ways to grow their skills.",
    iconBg: "bg-blue-pale",
    iconColor: "text-blue",
  },
  {
    icon: UsersRound,
    title: "Social Growth",
    desc: "The people you meet in KTP will go on to be some of your closest friends. From formal to tailgates to retreat, we bring our members together throughout the year.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
];

export default function WelcomeSection() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: pillarsRef, inView: pillarsInView } = useInView();

  return (
    <div className="content-below-fold">
      {/* Stats */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfe_0%,#edf6fc_48%,#f8fbfe_100%)] py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-5rem] top-6 h-40 w-40 rounded-full bg-blue/16 blur-3xl" />
          <div className="absolute right-[4%] top-10 h-52 w-52 rounded-full bg-blue-light/20 blur-3xl" />
          <div className="absolute bottom-0 left-[14%] h-44 w-44 rounded-full bg-white blur-3xl" />
        </div>
        <div
          ref={statsRef}
          className={`relative mx-auto max-w-6xl px-6 reveal ${statsInView ? "visible" : ""}`}
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow">By the numbers</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy md:text-5xl">
              A community built for tech students.
            </h2>
            <div className="section-divider-center" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              Kappa Theta Pi brings together students from across UNC who are passionate about technology and want to grow professionally, technically, and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map(({ value, label, detail, icon: Icon }, i) => (
              <div
                key={label}
                className={`surface-hover-lift rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-[0_2px_12px_rgba(15,23,42,0.06)] reveal reveal-delay-${i + 1} ${statsInView ? "visible" : ""}`}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-pale text-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xl font-black leading-tight text-navy">{value}</p>
                <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-blue">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[linear-gradient(180deg,#eef6fc_0%,#f6fbff_100%)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow">Our Pillars</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy md:text-4xl">What we stand for.</h2>
            <div className="section-divider-center" />
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Kappa Theta Pi gives brothers the support to do something special during their time at UNC, built around three core pillars.
            </p>
          </div>

          <div
            ref={pillarsRef}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {pillars.map(({ icon: PillarIcon, title, desc, iconBg, iconColor }, i) => (
              <div
                key={title}
                className={`surface-hover-sheen reveal reveal-delay-${i + 1} rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_2px_12px_rgba(15,23,42,0.06)] ${pillarsInView ? "visible" : ""}`}
              >
                <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
                  <PillarIcon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                </div>
                <h3 className="text-navy font-bold text-xl leading-tight mb-3">{title}</h3>
                <p className="text-slate-500 text-[0.95rem] leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

