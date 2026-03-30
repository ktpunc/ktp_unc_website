"use client";
import { useInView } from "@/hooks/useInView";

const pillars = [
  { icon: "fa-briefcase",       title: "Professional Development", desc: "Interview training, resume building, mentorship, and private company recruiting — preparing members for careers at the forefront of tech." },
  { icon: "fa-user-graduate",   title: "Alumni Connections",       desc: "Our alumni are at Microsoft, Amazon, Apple, Google, Meta, and top startups worldwide — your network before you even graduate." },
  { icon: "fa-champagne-glasses",title: "Social Growth",            desc: "Formals, tailgates, retreats, and countless shared memories. The people you meet here become lifelong friends." },
  { icon: "fa-laptop-code",     title: "Technical Advancement",    desc: "Project teams, hackathons, and technical workshops to sharpen skills and build real-world experience." },
  { icon: "fa-book-open",       title: "Academic Support",         desc: "A network of brilliant minds always ready to help — from coursework to extracurriculars and beyond." },
];

export default function Pillars() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-blue-pale py-20 border-y border-blue-mid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="eyebrow">Our Pillars</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">What makes us who we are.</h2>
          <div className="section-divider" />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(({ icon, title, desc }, i) => (
            <div key={title} className={`card card-accent p-7 reveal reveal-delay-${(i % 4) + 1} ${inView ? "visible" : ""}`}>
              <div className="w-10 h-10 rounded-md bg-blue-pale border border-blue/20 flex items-center justify-center mb-4">
                <i className={`fa-solid ${icon} text-blue`} />
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}

          {/* Quote card */}
          <div className={`rounded-lg p-7 flex items-center justify-center reveal reveal-delay-3 ${inView ? "visible" : ""}`}
            style={{ background: '#13294B' }}>
            <blockquote className="text-center">
              <p className="text-xl font-serif text-white/90 italic leading-snug mb-3">
                "Innovation thrives at the intersection of collaboration and ambition."
              </p>
              <cite className="text-white/40 text-xs not-italic tracking-widest uppercase">KTP Eta Chapter</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
