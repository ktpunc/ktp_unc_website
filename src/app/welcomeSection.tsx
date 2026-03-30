"use client";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "50+", label: "Active Members", icon: "fa-users" },
  { value: "4+", label: "Years at UNC", icon: "fa-calendar" },
  { value: "100+", label: "Alumni Network", icon: "fa-graduation-cap" },
  { value: "Top", label: "Companies Placed", icon: "fa-building" },
];

const features = [
  {
    icon: "fa-briefcase",
    title: "Professional Development",
    desc: "Resume workshops, mock interviews, private recruiting, and mentorship from industry leaders.",
  },
  {
    icon: "fa-code",
    title: "Technical Growth",
    desc: "Project teams, hackathons, technical workshops — sharpen your skills alongside talented peers.",
  },
  {
    icon: "fa-people-group",
    title: "Lifelong Community",
    desc: "Formals, tailgates, retreats, and bonds that go far beyond graduation.",
  },
];

export default function WelcomeSection() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: featuresRef, inView: featuresInView } = useInView();

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 stagger ${
            statsInView ? "animate-on-scroll in-view" : "animate-on-scroll"
          }`}
        >
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="glass glass-hover rounded-2xl p-6 text-center">
              <i className={`fa-solid ${icon} text-blue-400 text-2xl mb-3`} />
              <div className="text-4xl font-black text-white mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="text-center mb-12">
          <div className="section-label">What We Offer</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            More Than a Tech Org.
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            KTP is where your career, skills, and friendships grow together.
          </p>
        </div>

        <div
          ref={featuresRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 stagger ${
            featuresInView ? "animate-on-scroll in-view" : "animate-on-scroll"
          }`}
        >
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5">
                <i className={`fa-solid ${icon} text-blue-400 text-xl`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
