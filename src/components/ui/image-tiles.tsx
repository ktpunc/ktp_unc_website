"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface ImageRevealProps {
  leftImage: string;
  middleImage: string;
  rightImage: string;
}

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const leftImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -8,
    x: -150,
    y: 10,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    rotate: 1,
    x: -160,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const middleImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: 6,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    rotate: 0,
    x: 0,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const rightImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -6,
    x: 200,
    y: 20,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    rotate: 3,
    x: 200,
    y: 10,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function ImageReveal({
  leftImage,
  middleImage,
  rightImage,
}: ImageRevealProps) {
  return (
    <motion.div
      className="relative my-12 flex h-[20rem] w-[20rem] scale-[0.82] items-center justify-center sm:h-[22rem] sm:w-[22rem] sm:scale-90 lg:h-[24rem] lg:w-[24rem] lg:scale-100"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute h-48 w-48 origin-bottom-right overflow-hidden rounded-xl bg-white p-2 shadow-lg"
        variants={leftImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 10 }}
      >
        <Image
          src={leftImage}
          alt="KTP members"
          width={192}
          height={192}
          className="h-full w-full rounded-xl object-cover"
          sizes="(max-width: 768px) 10rem, 12rem"
        />
      </motion.div>

      <motion.div
        className="absolute h-48 w-48 origin-bottom-left overflow-hidden rounded-xl bg-white p-2 shadow-lg"
        variants={middleImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 20 }}
      >
        <Image
          src={middleImage}
          alt="KTP members"
          width={192}
          height={192}
          className="h-full w-full rounded-2xl object-cover"
          sizes="(max-width: 768px) 10rem, 12rem"
        />
      </motion.div>

      <motion.div
        className="absolute h-48 w-48 origin-bottom-right overflow-hidden rounded-xl bg-white p-2 shadow-lg"
        variants={rightImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 30 }}
      >
        <Image
          src={rightImage}
          alt="KTP members"
          width={192}
          height={192}
          className="h-full w-full rounded-2xl object-cover"
          sizes="(max-width: 768px) 10rem, 12rem"
        />
      </motion.div>
    </motion.div>
  );
}
