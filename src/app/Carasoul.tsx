"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useInView } from "@/hooks/useInView";

const images = [
  "/carasoul/photo1.jpg", "/carasoul/photo2.jpg", "/carasoul/photo3.jpg",
  "/carasoul/photo4.jpg", "/carasoul/photo5.JPG", "/carasoul/photo6.jpg",
  "/carasoul/photo7.jpg", "/carasoul/photo8.jpg", "/carasoul/photo9.JPG", "/carasoul/photo10.JPG",
];

export default function Carousel() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-20 bg-slate-950 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 mb-10 text-center ${
          inView ? "animate-on-scroll in-view" : "animate-on-scroll"
        }`}
      >
        <div className="section-label">Life at KTP</div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Our Memories</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        slidesPerView={1.2}
        spaceBetween={16}
        centeredSlides
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
        className="w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl overflow-hidden h-64 md:h-80 group">
              <img
                src={src}
                alt={`KTP memory ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
