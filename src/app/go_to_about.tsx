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
          <h1 className="text-4xl font-bold mt-8">
            About Kappa Theta Pi
          </h1>
          <hr className="my-6 w-full border-black" />
          <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
            Kappa Theta Pi is UNC’s first co-ed professional technology organization focused
            on the professional, social, and technical development of our members. We believe 
            that networking is far more than just professionalism — it is a process built on 
            friendship, trust, and memberhood. Innovation thrives at the intersection of collaboration and support. 
            Through shared experiences, professional development, and lifelong bonds, our members grow together 
            as leaders in the ever-evolving world of technology. 
            Join us in creating a legacy that blends passion for technology with the power of genuine human connection.
          </p>
        </div>

        {/* Right Side: Old Well Logo + Centered Button */}
        <div className="md:w-1/3 flex flex-col items-center mt-12 md:mt-16">
          <div className="w-full flex justify-center">
            <Image
              src="/image/oldwell-logo.svg"
              alt="Old Well Logo"
              width={200}
              height={200}
              className="custom-logo-size"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleButtonClick}
              className="mt-6 px-8 py-3 bg-ruddyBlue text-white font-bold rounded-lg shadow-md border-2 border-ruddyBlue hover:bg-white hover:text-ruddyBlue transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}