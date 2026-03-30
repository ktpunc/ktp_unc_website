"use client";
import { useInView } from "@/hooks/useInView";

export default function Schedule() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white pt-28 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`reveal ${inView ? "visible" : ""}`}>

          {/* Header */}
          <span className="eyebrow">Recruitment</span>
          <h1 className="text-4xl md:text-5xl font-black text-navy mb-3">
            Spring 2026 Recruitment Has Closed
          </h1>
          <div className="section-divider" />
          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
            Thank you to everyone who rushed this semester — we're so excited to welcome our newest members. Stay tuned for Fall 2026!
          </p>

          {/* Status card */}
          <div className="card border-l-4 border-l-blue p-6 mb-10 flex items-start gap-4">
            <div className="w-9 h-9 rounded-md bg-blue-pale flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="fa-solid fa-clock text-blue text-sm" />
            </div>
            <div>
              <p className="text-navy font-semibold mb-1">Next recruitment: Fall 2026</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Follow{" "}
                <a href="https://www.instagram.com/ktpunc/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline font-medium">@ktpunc on Instagram</a>
                {" "}to be the first to know when applications open.
              </p>
            </div>
          </div>

          {/* Requirements */}
          <h2 className="text-xl font-bold text-navy mb-5">Who Can Apply?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "fa-graduation-cap", title: "Any Major",       desc: "CS, Business, Philosophy, Bio — all welcome." },
              { icon: "fa-star",           title: "2.5+ GPA",        desc: "Minimum cumulative GPA required." },
              { icon: "fa-calendar-check", title: "2+ Semesters",    desc: "Must have at least two semesters remaining." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card card-accent p-5 text-center">
                <i className={`fa-solid ${icon} text-blue text-xl mb-2`} />
                <h3 className="text-navy font-semibold text-sm mb-1">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-lg p-8 text-center" style={{ background: '#13294B' }}>
            <h3 className="text-2xl font-black text-white mb-2">Stay in the Loop</h3>
            <p className="text-white/60 text-sm mb-6 max-w-sm mx-auto">
              Recruitment announcements go out on Instagram first. Follow us and reach out with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://www.instagram.com/ktpunc/" target="_blank" rel="noopener noreferrer" className="btn-blue">
                <i className="fa-brands fa-instagram mr-2" />Follow @ktpunc
              </a>
              <a href="mailto:uncktp@gmail.com" className="btn-outline-white">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
