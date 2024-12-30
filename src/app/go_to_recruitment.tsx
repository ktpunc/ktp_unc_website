"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function RecruitmentSection() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/recruitment');
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 py-10 text-black flex flex-col items-center text-center">
        
        {/* Logo big in the middle at the top */}
        <div>
          <Image
            src="/image/ktp_logo.png"
            alt="KTP Logo"
            width={300}
            height={300}
          />
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold mt-8">
          Eta Chapter is back!
        </h1>
        
        {/* Horizontal divider */}
        <hr className="my-6 w-full border-black" />
        
        {/* Description text */}
        <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto">
          Learn how to get involved with our chapter and upcoming recruitment season!
        </p>
        
        {/* Another divider */}
        <hr className="my-6 w-full border-black" />
        
        {/* Button */}
        <button
          onClick={handleButtonClick}
          className="border border-black px-6 py-3 rounded-md hover:bg-gray-100 text-xl font-semibold"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}