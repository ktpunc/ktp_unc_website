"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AboutSection() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about-us');
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Heading + Paragraph */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            <span className="text-black">About Kappa The</span>ta Pi
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Kappa Theta Pi is UNC’s first co-ed professional technology organization focused
            on the professional, social, and technical development of our members. 
            We believe that networking is far more than just professionalism — it’s a process built on
            friendship, trust, and memberhood. 
            At KTP, we believe that innovation thrives at the intersection of collaboration and support. 
            Through shared experiences, professional development, and lifelong bonds, our members grow together as 
            leaders in the ever-evolving world of technology. 
            Join us in creating a legacy that blends passion for 
            technology with the power of genuine human connection.
            Check out the other parts of the website to learn more about our members, our
            upcoming recruitment process, and more!
          </p>
        </div>

        {/* Right Side: Old Well Logo + Centered Button */}
        <div className="md:w-1/3 flex flex-col items-center mt-12 md:mt-16"> {/* Adjusted margin-top */}
          <div className="w-full flex justify-center">
            <Image
              src="/image/oldwell-logo.svg"
              alt="Old Well Logo"
              width={200} // Adjusted width to make it more proportional
              height={200} // Adjusted height to match
              className="custom-logo-size"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleButtonClick}
              className="mt-6 px-4 py-2 bg-black text-white font-semibold rounded-md border border-black hover:bg-ruddyBlue"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}