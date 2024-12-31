"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Core Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function Carousel() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the screen is desktop-sized
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust width threshold as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselImages = [
    "/carasoul/photo1.jpg",
    "/carasoul/photo2.jpg",
    "/carasoul/photo3.jpg",
    "/carasoul/photo4.jpg",
    "/carasoul/photo5.jpg",
    "/carasoul/photo6.jpg",
    "/carasoul/photo7.jpg",
    "/carasoul/photo8.jpg",
    "/carasoul/photo9.jpg",
    "/carasoul/photo10.jpg",
  ];

  if (!isDesktop) return null; // Do not render the carousel on non-desktop screens

  return (
    <div className="relative w-screen h-[30vh] overflow-hidden bg-white border-t-4">
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Overlay Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
          Our Memories
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={5}
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
              className="w-full h-full object-cover border-4 border-gray-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}