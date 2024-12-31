import React from "react";

const Pillars = () => {
  const pillars = [
    {
      title: "Professional Development",
      description:
        "Through events like interview training, resume building, mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future.",
    },
    {
      title: "Alumni Connections",
      description:
        "Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies - from tech companies like Microsoft, Amazon, Facebook, Apple, and Google, to startups, consulting firms, financial technology firms, and more!",
    },
    {
      title: "Social Growth",
      description:
        "The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the semester through which our members can bond, some of which include formal, tailgates, retreats, and more!",
    },
    {
      title: "Technical Advancement",
      description:
        "Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise.",
    },
    {
      title: "Academic Support",
      description:
        "Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities.",
    },
  ];

  return (
    <div
      className="py-12 bg-none md:bg-[url('/image/circle.svg')] md:bg-contain md:bg-no-repeat md:bg-center"
    >
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-black mb-4 uppercase tracking-wide">
          <span className="border-b-4 border-babyBlue">Pillars</span>
        </h1>

        {/* Desktop View */}
        <div className="hidden md:grid relative grid-cols-3 gap-6 place-items-center">
          {/* First Row */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-black mb-4">
              {pillars[0].title}
            </h3>
            <p className="text-xl font-light text-gray-600 leading-relaxed">
              {pillars[0].description}
            </p>
          </div>
          <div className="bg-transparent p-6 rounded-lg text-center">
            <h3 className="text-2xl md:text-3xl lg:text-6xl font-serif text-gray-800">
              <span className="block">What</span>
              <span className="block">makes us</span>
              <span className="block font-extrabold text-black">who we</span>
              <span className="block font-extrabold text-black">are.</span>
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-black mb-4">
              {pillars[1].title}
            </h3>
            <p className="text-xl font-light text-gray-600 leading-relaxed">
              {pillars[1].description}
            </p>
          </div>

          {/* Second Row */}
          {pillars.slice(2).map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-black mb-4">
                {pillar.title}
              </h3>
              <p className="text-xl font-light text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-black mb-4">
                {pillar.title}
              </h3>
              <p className="text-xl font-light text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pillars;