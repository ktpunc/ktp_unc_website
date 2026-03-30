"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const faqData = [
  { q: "Who can apply to KTP?", a: "Everyone is encouraged to apply — we love applicants from all disciplines! Our sole requirement is that you have at least 2 semesters left of school after the semester in which you apply." },
  { q: "What is KTP looking for?", a: "There's no cookie cutter ideal candidate — if there were, KTP wouldn't be the multi-talented, interdisciplinary organization it is. People who are truly passionate about technology are the ones who fit in best." },
  { q: "How would I benefit from KTP?", a: "KTP offers a supportive community passionate about technology. We provide mentoring in career advising, interview prep, resume development, and coursework — plus a network of alumni at the world's top companies." },
  { q: "What major do I need?", a: "Anything! While many members study CS, we have members studying Philosophy, Business, Environmental Science, Statistics, Information Science, Data Science, Economics, and more." },
  { q: "Is there a minimum GPA?", a: "Yes — a minimum 2.5 cumulative GPA is required to be eligible for recruitment." },
  { q: "What is the recruitment process?", a: "Two stages: informal recruitment (open to everyone, casual setting) and formal recruitment (invite-only, more structured). We encourage all interested students to attend informal events." },
  { q: "What if I can't attend all informal events?", a: "We're happy to work with anyone interested. Please reach out to our Director of Membership to discuss how we can make recruitment work for you." },
  { q: "How much of a time commitment is NME?", a: "Our New Member Education process is equivalent to a 3 credit-hour course — manageable alongside a normal class schedule." },
  { q: "Can I apply if I didn't receive a bid before?", a: "Absolutely — we strongly encourage it. Persistence often leads to success in future attempts." },
  { q: "What if I'm rushing another org?", a: "We welcome everyone regardless. We provide an opportunity on our application to indicate you're rushing another pre-professional organization." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView(0.05);

  return (
    <section className="pt-28 pb-24 bg-slate-950 mesh-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label">FAQ</div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-slate-400 text-lg">Everything you need to know about joining KTP.</p>
        </div>

        <div
          ref={ref}
          className={`space-y-3 stagger ${inView ? "animate-on-scroll in-view" : "animate-on-scroll"}`}
        >
          {faqData.map(({ q, a }, i) => (
            <div
              key={i}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-blue-500/30" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
              >
                <span className="text-white font-semibold text-base group-hover:text-blue-300 transition-colors">
                  {q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i ? "bg-blue-500 rotate-45" : "bg-slate-700"
                }`}>
                  <i className="fa-solid fa-plus text-white text-xs" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-slate-400 leading-relaxed text-sm">{a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 glass rounded-2xl p-8">
          <p className="text-white font-semibold text-lg mb-2">Still have questions?</p>
          <p className="text-slate-400 text-sm mb-6">Reach out — we'd love to chat.</p>
          <a href="mailto:uncktp@gmail.com" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
