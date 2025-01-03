"use client";

import { useRouter } from 'next/navigation';
import styles from './styles/MembersSection.module.css';

export default function MembersSection() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/members');
  };

  return (
    <div className={`relative bg-cover bg-center flex items-center justify-center ${styles['members-section']}`}>
      {/* Grey overlay for better text visibility */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content Overlay */}
      <div className="relative text-center text-white px-8 py-12 max-w-4xl">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold">
          Our Memberhood
        </h1>

        {/* Description Text */}
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mt-6 leading-relaxed">
          Our chapter is comprised of over 50 self-driven, ambitious members. Take a look at our chapter and meet the people who make Kappa Theta Pi truly special!
        </p>

        {/* Button */}
        <button
          onClick={handleButtonClick}
          className="mt-10 px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300"
        >
          Meet Our Members
        </button>
      </div>
    </div>
  );
}