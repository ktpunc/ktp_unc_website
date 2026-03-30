"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "I chose to join KTP because I felt it was the only CS organization that went above and beyond in terms of both professional growth and a strong sense of community. I have met some of my best friends through this organization.",
    author: "Chris Zou",
    year: "Class of '27",
    image: "/testimonials/chris.jpg",
  },
  {
    text: "KTP not only introduced me to some of my closest friends, but also to a group of amazing people who have been a constant source of support in so many aspects of my life!",
    author: "Tanvi Pulipaka",
    year: "Class of '25",
    image: "/testimonials/tanvi.jpg",
  },
  {
    text: "I used to think KTP was just a CS organization but after joining I realized how many majors KTP has — it's been super cool having members in my Business classes too!",
    author: "Alex Gonzales",
    year: "Class of '26",
    image: "/testimonials/alex.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState("fade-in");

  const go = (next: number) => {
    setFade("fade-out");
    setTimeout(() => {
      setCurrent((next + testimonials.length) % testimonials.length);
      setFade("fade-in");
    }, 400);
  };

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 8000);
    return () => clearInterval(t);
  }, [current]);

  const t = testimonials[current];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="eyebrow">Member Voices</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Hear From Our Members</h2>
          <div className="section-divider" />
        </div>

        <div className="card p-8 md:p-10 border-l-4 border-l-blue">
          <div className={`${fade}`}>
            <div className="flex flex-col sm:flex-row gap-7 items-start">
              <img
                src={t.image}
                alt={t.author}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-2 ring-blue/20"
              />
              <div>
                <p className="text-2xl text-blue font-serif leading-none mb-3">"</p>
                <p className="text-slate-600 text-lg leading-relaxed mb-5">{t.text}</p>
                <div>
                  <span className="text-navy font-semibold">{t.author}</span>
                  <span className="text-slate-400 text-sm ml-2">— KTP, {t.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-100">
            <button onClick={() => go(current - 1)} className="w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:border-navy hover:text-navy transition-colors">
              <i className="fa-solid fa-arrow-left text-xs" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-blue w-6" : "bg-slate-200 w-1.5"}`}
                />
              ))}
            </div>
            <button onClick={() => go(current + 1)} className="w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:border-navy hover:text-navy transition-colors">
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
