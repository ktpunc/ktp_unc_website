"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "I chose to join KTP because I felt it was the only computer science organization that I felt went above and beyond in terms of both professional growth and a strong sense of community. I have met some of my best friends and formed deep connections through KTP.",
    author: "Chris Zou '27",
    image: "/testimonials/chris.jpg",
  },
  {
    text: "Scale and Coin was and will continue to be a community that I will identify with. This group of hard-working, ambitious students pushed me to reach beyond expectations. The intensive training process also provided important hard and soft skills that helped me find a career that I enjoy. I am thankful for Scale.",
    author: "Jiaqi Zhang '23",
    image: "/image/tower.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setFadeProp({ fade: "fade-out" });
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFadeProp({ fade: "fade-in" });
    }, 500);
  };

  const prevTestimonial = () => {
    setFadeProp({ fade: "fade-out" });
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setFadeProp({ fade: "fade-in" });
    }, 500);
  };

  return (
    <div className="py-8 bg-babyBlue px-4 md:px-12 flex items-center justify-center relative">
      <div className="flex flex-col items-center max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-4 text-outline-white">
          What Our Current and Past Members Say
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-between w-full px-4 md:px-12 relative">
          {/* Text Section */}
          <div className="md:w-1/2 p-4 flex flex-col items-start relative">
            <div
              className="relative w-full h-full text-black border border-gray-800 p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className={`transition-opacity duration-500 ${fadeProp.fade}`}>
                <p className="text-xl lg:text-xl mb-4 transition-transform duration-300">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="text-right text-lg lg:text-xl font-semibold">
                  - {testimonials[currentIndex].author}
                </p>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-transparent hover:bg-ruddyBlue text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                &#8592; {/* Left arrow */}
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-transparent hover:bg-ruddyBlue text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                &#8594; {/* Right arrow */}
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <div className="w-full h-full rounded-lg shadow-lg border border-gray-800 overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={testimonials[currentIndex].image}
                alt="Testimonial"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;