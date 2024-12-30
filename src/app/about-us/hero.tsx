"use client";

import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/tower.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-outline-white"
          >
            About Us
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;