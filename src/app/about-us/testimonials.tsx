"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Chris Zou",
    title: "Class of '27",
    description:
      "I chose to join KTP because I felt it was the only CS organization that really went above and beyond in both professional growth and community. Some of my best friendships at UNC started here.",
    imageUrl: "/testimonials/chris.jpg",
  },
  {
    name: "Tanvi Pulipaka",
    title: "Class of '25",
    description:
      "KTP introduced me to some of my closest friends and a group of people who have been a constant source of support in so many parts of my life.",
    imageUrl: "/testimonials/tanvi.jpg",
  },
  {
    name: "Alex Gonzales",
    title: "Class of '26",
    description:
      "I used to think KTP was just a CS organization, but after joining I realized how many majors it really brings together. It has been so cool seeing that community across classes and campus.",
    imageUrl: "/testimonials/alex.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Member Voices</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy md:text-4xl">
            Hear From Our Members
          </h2>
          <div className="section-divider-center" />
        </div>

        <div className="surface-hover-quote hidden overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)] shadow-[0_18px_44px_rgba(15,23,42,0.06)] md:grid md:grid-cols-[320px_minmax(0,1fr)]">
          <div className="relative min-h-[360px] overflow-hidden bg-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.imageUrl}
                initial={{ opacity: 0.15, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.15, scale: 0.99 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full w-full"
              >
                <Image
                  src={currentTestimonial.imageUrl}
                  alt={currentTestimonial.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                  draggable={false}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex min-h-[360px] flex-col justify-between p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex h-full flex-col"
              >
                <p className="max-w-2xl text-[1.08rem] leading-8 text-slate-600">
                  {currentTestimonial.description}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-6">
                  <h3 className="text-2xl font-black tracking-tight text-navy">
                    {currentTestimonial.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {currentTestimonial.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mx-auto max-w-sm md:hidden">
          <div className="surface-hover-quote overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <div className="aspect-[1/1] overflow-hidden bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.imageUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    width={420}
                    height={420}
                    className="h-full w-full object-cover"
                    draggable={false}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <p className="text-sm leading-7 text-slate-600">
                    {currentTestimonial.description}
                  </p>
                  <div className="mt-5">
                    <h3 className="text-base font-bold text-navy">{currentTestimonial.name}</h3>
                    <p className="text-sm text-slate-500">{currentTestimonial.title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            onClick={handlePrevious}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/25 hover:text-navy"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, testimonialIndex) => (
              <button
                key={testimonialIndex}
                onClick={() => setCurrentIndex(testimonialIndex)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-200",
                  testimonialIndex === currentIndex
                    ? "w-8 bg-navy"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to testimonial ${testimonialIndex + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/25 hover:text-navy"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
