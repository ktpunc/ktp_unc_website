"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const faqData = [
  { q: "Who can apply to KTP?",                         a: "Everyone is encouraged to apply — we love applicants from all disciplines! Our sole requirement is that you have at least 2 semesters left of school after the semester in which you apply." },
  { q: "What is KTP looking for?",                      a: "There's no cookie cutter ideal candidate. People who are truly passionate about technology and community are the ones who fit in best — we love seeing diverse backgrounds and perspectives." },
  { q: "How would I benefit from KTP?",                 a: "KTP offers mentoring in career advising, interview prep, resume development, and coursework — plus a network of alumni at the world's top companies who are genuinely invested in your success." },
  { q: "What major do I need?",                         a: "Anything! While many members study CS, we have members studying Philosophy, Business, Environmental Science, Statistics, Information Science, Data Science, Economics, and more." },
  { q: "Is there a minimum GPA?",                       a: "Yes — a minimum 2.5 cumulative GPA is required to be eligible for recruitment." },
  { q: "What is the recruitment process?",              a: "Two stages: informal recruitment (open to everyone, casual setting) and formal recruitment (invite-only, more structured). We encourage all interested students to attend informal events first." },
  { q: "What if I can't attend all informal events?",   a: "We're happy to work with anyone. Reach out to our Director of Membership and we'll find a way to make recruitment work for your schedule." },
  { q: "How much time does NME require?",               a: "Our New Member Education process is roughly equivalent to a 3 credit-hour course — very manageable alongside a normal class schedule." },
  { q: "Can I apply again after not receiving a bid?",  a: "Absolutely — we strongly encourage it. Many of our strongest members applied more than once." },
  { q: "What if I'm also rushing another org?",         a: "We welcome everyone regardless. Our application has a field for this so we can help you find the best fit." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView(0.05);

  return (
    <section className="bg-white pt-28 pb-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="eyebrow">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-black text-navy mb-3">
            Frequently Asked Questions
          </h1>
          <div className="section-divider" />
          <p className="text-slate-500 text-lg">Everything you need to know about joining KTP.</p>
        </div>

        {/* Accordion */}
        <div ref={ref} className={`space-y-2 reveal ${inView ? "visible" : ""}`}>
          {faqData.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border rounded-lg overflow-hidden transition-colors duration-200 ${
                open === i ? "border-blue/40 shadow-card" : "border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 group"
              >
                <span className={`font-semibold text-sm transition-colors ${open === i ? "text-navy" : "text-slate-700 group-hover:text-navy"}`}>
                  {q}
                </span>
                <span className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                  open === i ? "bg-blue border-blue text-white rotate-45" : "border-slate-300 text-slate-400"
                }`}>
                  <i className="fa-solid fa-plus text-[10px]" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-5 pb-4 text-slate-500 text-sm leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 card p-7 text-center border-t-4 border-t-blue">
          <p className="text-navy font-semibold mb-1">Still have questions?</p>
          <p className="text-slate-500 text-sm mb-5">We're always happy to chat.</p>
          <a href="mailto:uncktp@gmail.com" className="btn-navy">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
