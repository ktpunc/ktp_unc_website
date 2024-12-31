import Image from "next/image";

const AboutUs = () => {
  const images = [
    { src: "/about-us/image1.jpg", alt: "About Us Image 1" },
    { src: "/about-us/image3.jpg", alt: "About Us Image 3" },
    { src: "/about-us/image4.jpg", alt: "About Us Image 4" },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
        {/* Image Section with Fixed Sizes */}
        <div className="hidden md:flex flex-col gap-6 md:w-1/3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[250px] rounded-lg overflow-hidden border border-gray-300 shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{ maxWidth: "300px" }} // Enforce fixed width
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Text Section - Matches Style */}
        <div className="md:w-2/3 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold text-black">Who Are We?</h1>
          <hr className="my-6 w-full border-black" />
          <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
            Kappa Theta Pi stands as the pioneering professional technology
            organization in the nation and the first co-ed professional
            technology organization at UNC. Our core mission is to enhance the
            professional, social, and technical development of our members,
            ensuring they acquire essential skills to remain at the forefront
            of the tech industry and foster a robust foundation for future
            career success. Our programs are designed to challenge our members
            and push the boundaries of their capabilities, preparing them for
            real-world challenges.
          </p>
          <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mt-6">
            Over the past four years, our organization has blossomed into a
            vibrant and supportive network that thrives on the unique
            backgrounds and shared passion for technology among our members.
            This diversity enriches our community, creating a powerful synergy
            of talents and perspectives.
          </p>
          <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mt-6">
            At Kappa Theta Pi, we view networking as more than professionalism;
            it is a journey built on friendship, trust, and camaraderie. We
            provide an environment where members can excel both academically
            and socially, fostering long-lasting connections and personal and
            professional growth.
          </p>
          <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mt-6">
            Join us in shaping a legacy that blends a passion for technology
            with the power of genuine human connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;