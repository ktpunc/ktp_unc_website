"use client";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "50+",  label: "Active Members" },
  { value: "4+",   label: "Years at UNC" },
  { value: "100+", label: "Alumni" },
  { value: "F500", label: "Companies Placed" },
];

const pillars = [
  {
    icon: "fa-briefcase",
    title: "Professional Development",
    desc: "Resume workshops, mock interviews, private recruiting, and mentorship from people already working at your dream company.",
  },
  {
    icon: "fa-laptop-code",
    title: "Technical Growth",
    desc: "Project teams, hackathons, and workshops to sharpen skills and build things that matter — alongside talented peers.",
  },
  {
    icon: "fa-people-group",
    title: "Lifelong Community",
    desc: "Formals, tailgates, retreats, and the kind of friendships that go way past graduation day.",
  },
];

export default function WelcomeSection() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: pillarsRef, inView: pillarsInView } = useInView();

  return (
    <>
      {/* Stats strip */}
      <div className="bg-navy">
        <div
          ref={statsRef}
          className={`max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10 reveal ${statsInView ? "visible" : ""}`}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center px-6 py-2">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{value}</div>
              <div className="text-white/50 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section className="bg-blue-pale py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="eyebrow">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy">More than a tech org.</h2>
            <div className="section-divider-center" />
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              KTP is where your career, your skills, and your friendships all grow at the same time.
            </p>
          </div>

          <div
            ref={pillarsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`card card-accent p-7 reveal reveal-delay-${i + 1} ${pillarsInView ? "visible" : ""}`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-pale flex items-center justify-center mb-4 border border-blue/20">
                  <i className={`fa-solid ${icon} text-blue`} />
                </div>
                <h3 className="text-navy font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
