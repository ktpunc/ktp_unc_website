"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

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
  const prefersReducedMotion = useReducedMotion();

  // On touch/mobile or reduced-motion, skip spring physics entirely
  const shouldAnimate = !prefersReducedMotion;

  const staticLeft  = { rotate: -8, x: -150, y: 10 };
  const staticMid   = { rotate: 6, x: 0, y: 0 };
  const staticRight = { rotate: -6, x: 200, y: 20 };

  return (
    <motion.div
      className="relative my-12 flex h-[20rem] w-[20rem] scale-[0.82] items-center justify-center sm:h-[22rem] sm:w-[22rem] sm:scale-90 lg:h-[24rem] lg:w-[24rem] lg:scale-100"
      variants={containerVariants}
      initial={shouldAnimate ? "initial" : false}
      animate={shouldAnimate ? "animate" : undefined}
      style={!shouldAnimate ? { opacity: 1 } : undefined}
    >
      <motion.div
        className="absolute h-48 w-48 origin-bottom-right overflow-hidden rounded-xl bg-white p-2 shadow-lg"
        variants={shouldAnimate ? leftImageVariants : undefined}
        whileHover={shouldAnimate ? "hover" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        style={{ zIndex: 10, ...(shouldAnimate ? {} : staticLeft) }}
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
        variants={shouldAnimate ? middleImageVariants : undefined}
        whileHover={shouldAnimate ? "hover" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        style={{ zIndex: 20, ...(shouldAnimate ? {} : staticMid) }}
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
        variants={shouldAnimate ? rightImageVariants : undefined}
        whileHover={shouldAnimate ? "hover" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        style={{ zIndex: 30, ...(shouldAnimate ? {} : staticRight) }}
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
