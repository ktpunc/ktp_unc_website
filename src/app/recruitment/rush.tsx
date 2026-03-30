"use client";
import { useInView } from "@/hooks/useInView";

const events = [
  { event: "TBD", date: "TBD", location: "TBD" },
];

export default function Schedule() {
  const { ref, inView } = useInView();

  return (
    <section className="pt-28 pb-24 bg-slate-950 mesh-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`${inView ? "animate-on-scroll in-view" : "animate-on-scroll"}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label">Join KTP</div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Spring 2026 <span className="gradient-text">Recruitment</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Any UNC undergraduate with an interest in technology and at least two semesters remaining is welcome to apply.
            </p>
          </div>

          {/* Who can apply */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "fa-university", title: "Any Major", desc: "CS, Business, Philosophy, Bio — all welcome." },
              { icon: "fa-star", title: "2.5+ GPA", desc: "Minimum cumulative GPA required." },
              { icon: "fa-calendar-check", title: "2+ Semesters", desc: "Must have at least two semesters remaining." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="glass glass-hover rounded-2xl p-6 text-center">
                <i className={`fa-solid ${icon} text-blue-400 text-2xl mb-3`} />
                <h3 className="text-white font-bold mb-1">{title}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div className="glass rounded-3xl p-8 mb-10">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-calendar text-blue-400" />
              Event Schedule
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left text-slate-400 text-xs font-semibold tracking-widest uppercase py-3 pr-6">Event</th>
                    <th className="text-left text-slate-400 text-xs font-semibold tracking-widest uppercase py-3 pr-6">Date & Time</th>
                    <th className="text-left text-slate-400 text-xs font-semibold tracking-widest uppercase py-3">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(({ event, date, location }, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="py-4 pr-6 text-white font-medium">{event}</td>
                      <td className="py-4 pr-6 text-slate-400">{date}</td>
                      <td className="py-4 text-slate-400">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass rounded-3xl p-10"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(29,78,216,0.1))' }}>
            <h3 className="text-3xl font-black text-white mb-3">Ready to Apply?</h3>
            <p className="text-slate-400 mb-8">Register for informal recruitment to get started.</p>
            <a
              href="https://forms.gle/ZkgxRPWEvcXUJMBR7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5"
            >
              Register Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
