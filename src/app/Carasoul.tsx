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
    <section className="bg-white py-16 overflow-hidden">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 mb-10 text-center reveal ${inView ? "visible" : ""}`}>
        <span className="eyebrow">Life at KTP</span>
        <h2 className="text-3xl md:text-4xl font-black text-navy">Our Memories</h2>
        <div className="section-divider-center" />
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        loop
        slidesPerView={1.2}
        spaceBetween={12}
        centeredSlides
        breakpoints={{
          640:  { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-lg overflow-hidden h-56 md:h-72 group shadow-card">
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
