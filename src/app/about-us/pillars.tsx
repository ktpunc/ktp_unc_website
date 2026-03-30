"use client";
import { useInView } from "@/hooks/useInView";

const pillars = [
  { icon: "fa-briefcase", title: "Professional Development", desc: "Interview training, resume building, mentorship, and private company recruiting — preparing members for careers at the forefront of tech." },
  { icon: "fa-user-tie", title: "Alumni Connections", desc: "Our alumni are at Microsoft, Amazon, Apple, Google, Meta, and top startups worldwide — your network before you even graduate." },
  { icon: "fa-champagne-glasses", title: "Social Growth", desc: "Formals, tailgates, retreats, and countless shared memories. The people you meet here become lifelong friends." },
  { icon: "fa-laptop-code", title: "Technical Advancement", desc: "Project teams, hackathons, and technical workshops to sharpen skills and build real-world experience." },
  { icon: "fa-book-open", title: "Academic Support", desc: "A network of brilliant minds always ready to help — from coursework to extracurriculars." },
];

export default function Pillars() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label">Our Pillars</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            What Makes Us <span className="gradient-text">Who We Are</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger ${
            inView ? "animate-on-scroll in-view" : "animate-on-scroll"
          }`}
        >
          {pillars.map(({ icon, title, desc }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5">
                <i className={`fa-solid ${icon} text-blue-400 text-xl`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}

          {/* Center quote card */}
          <div className="glass rounded-2xl p-8 flex items-center justify-center md:col-span-2 lg:col-span-1"
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(29,78,216,0.12))' }}>
            <blockquote className="text-center">
              <p className="text-2xl font-serif text-white italic leading-snug mb-4">
                "Innovation thrives at the intersection of collaboration and ambition."
              </p>
              <cite className="text-slate-400 text-sm not-italic">— KTP Eta Chapter</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
