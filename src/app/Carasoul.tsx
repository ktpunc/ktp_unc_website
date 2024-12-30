"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Core Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function Carousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Enable Swiper rendering only on the client
    setIsClient(true);
  }, []);

  const carouselImages = [
    "/carasoul/photo1.jpg",
    "/carasoul/photo2.jpg",
    "/carasoul/photo3.jpg",
    "/carasoul/photo4.jpg",
    "/carasoul/photo5.jpg",
    "/carasoul/photo6.jpg",
    "/carasoul/photo7.jpg",
  ];

  return (
    <div className="relative w-screen h-[30vh] overflow-hidden bg-gray-100">
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Overlay Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
          Our Memories
        </h2>
      </div>

      {/* Swiper Carousel */}
      {isClient && (
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="absolute inset-0 w-full h-full z-0"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}