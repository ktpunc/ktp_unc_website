"use client";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "I chose to join KTP because I felt it was the only computer science organization that went above and beyond in terms of both professional growth and a strong sense of community. I have met some of my best friends through this organization.",
    author: "Chris Zou",
    year: "'27",
    image: "/testimonials/chris.jpg",
  },
  {
    text: "KTP not only introduced me to some of my closest friends, but also to a group of amazing people who have been a constant source of support in so many aspects of my life!",
    author: "Tanvi Pulipaka",
    year: "'25",
    image: "/testimonials/tanvi.jpg",
  },
  {
    text: "I used to think KTP was just a CS organization but after joining I realized how many majors KTP has — it's been super cool having members in my Business classes too!",
    author: "Alex Gonzales",
    year: "'26",
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
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label">Member Voices</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Hear From Our Members
          </h2>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />

          <div className={`transition-opacity duration-400 ${fade}`}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Quote */}
              <div>
                <div className="text-blue-400 text-4xl font-serif leading-none mb-4">"</div>
                <p className="text-white text-xl leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{t.author}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400 text-sm">KTP {t.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => go(current - 1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-all hover:border-blue-500/40"
            >
              <i className="fa-solid fa-arrow-left text-sm" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-blue-400 w-6" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(current + 1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-all hover:border-blue-500/40"
            >
              <i className="fa-solid fa-arrow-right text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
