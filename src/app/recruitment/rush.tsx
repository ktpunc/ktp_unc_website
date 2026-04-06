"use client";

import { useInView } from "@/hooks/useInView";

const eligibility = [
  {
    icon: "fa-graduation-cap",
    title: "Any Major",
    desc: "Students from any major are welcome — Computer Science, Journalism, Biology, Business, Peace War and Defense, Studio Art, and everything in between.",
    iconBg: "bg-blue-pale",
    iconColor: "text-blue",
  },
  {
    icon: "fa-star",
    title: "2.5+ GPA",
    desc: "A minimum cumulative GPA of 2.5 is required for eligibility.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: "fa-calendar-check",
    title: "2+ Semesters Left",
    desc: "Applicants should have at least two semesters remaining at UNC.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
];

export default function Schedule() {
  const { ref, inView } = useInView();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#eef6fc_100%)] pb-24 pt-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4rem] top-16 h-40 w-40 rounded-full bg-blue/12 blur-3xl" />
        <div className="absolute right-[-3rem] top-24 h-56 w-56 rounded-full bg-blue-light/14 blur-3xl" />
        <div className="absolute bottom-10 left-[18%] h-40 w-40 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div ref={ref} className={`reveal ${inView ? "visible" : ""}`}>
          <div className="surface-hover-float rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)] md:p-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
              <span className="eyebrow">Status Update</span>
              <h2 className="text-3xl font-black tracking-tight text-navy md:text-4xl">
                Spring 2026 recruitment has closed.
              </h2>
              <div className="section-divider" />
              <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Thank you to everyone who participated this semester. The next recruitment cycle will be
                in Fall 2026, and we&apos;ll post updates once dates and details are confirmed.
              </p>

              <div className="surface-hover-rail mt-8 rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-pale text-blue ring-1 ring-blue/10">
                    <i className="fa-solid fa-clock text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">Next Update</p>
                    <p className="mt-2 text-lg font-bold text-navy">Fall 2026 recruitment information</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Follow{" "}
                      <a
                        href="https://www.instagram.com/ktpunc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue transition-colors hover:text-navy"
                      >
                        @ktpunc
                      </a>{" "}
                      for updates on applications, events, and deadlines.
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div className="surface-hover-glow rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbfe_0%,#f2f8fd_100%)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-blue">
                  Stay Updated
                </span>
                <h3 className="mt-3 text-2xl font-black leading-tight text-navy">
                  Where to check for updates
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Instagram is where we post recruitment updates first, and email is the best way to reach
                  us if you have questions about eligibility, scheduling, or the process.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/ktpunc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-navy-light"
                  >
                    <i className="fa-brands fa-instagram text-base" />
                    <span>Follow @ktpunc</span>
                  </a>
                  <a
                    href="mailto:uncktp@gmail.com"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:bg-blue-pale"
                  >
                    <i className="fa-solid fa-envelope text-sm" />
                    <span>Email KTP</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-hover-sheen mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)] md:p-8">
            <div className="mb-8 max-w-2xl">
              <span className="eyebrow">Eligibility</span>
              <h3 className="text-2xl font-black tracking-tight text-navy md:text-3xl">
                Who can apply when recruitment opens?
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                The basics are simple. KTP is open to students from across UNC who are excited about
                technology, community, and growth.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {eligibility.map(({ icon, title, desc, iconBg, iconColor }) => (
                <div
                  key={title}
                  className="surface-hover-tilt rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
                >
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
                    <i className={`fa-solid ${icon} text-lg`} />
                  </div>
                  <h4 className="text-lg font-bold text-navy">{title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
