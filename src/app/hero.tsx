"use client";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/well2.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white text-outline-white">
            Co-Ed Professional Technology Organization at UNC-Chapel Hill
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;