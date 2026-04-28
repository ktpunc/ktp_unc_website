"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type ImageTilesVerticalProps = {
  topLeftImage: string;
  topRightImage: string;
  bottomLeftImage: string;
  bottomRightImage: string;
};

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.12,
      staggerChildren: 0.12,
    },
  },
};

const topLeftVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -5,
    x: -18,
    y: -10,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
  hover: {
    rotate: -2,
    x: -22,
    y: -16,
    transition: { type: "spring", stiffness: 200, damping: 16 },
  },
};

const topRightVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: 4,
    x: 18,
    y: 2,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
  hover: {
    rotate: 1,
    x: 22,
    y: -6,
    transition: { type: "spring", stiffness: 200, damping: 16 },
  },
};

const bottomLeftVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: 3,
    x: -10,
    y: 10,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
  hover: {
    rotate: 0,
    x: -14,
    y: 2,
    transition: { type: "spring", stiffness: 200, damping: 16 },
  },
};

const bottomRightVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -4,
    x: 14,
    y: 20,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
  hover: {
    rotate: -1,
    x: 18,
    y: 12,
    transition: { type: "spring", stiffness: 200, damping: 16 },
  },
};

const staticPositions = {
  topLeft:     { rotate: -5, x: -18, y: -10 },
  topRight:    { rotate: 4,  x: 18,  y: 2 },
  bottomLeft:  { rotate: 3,  x: -10, y: 10 },
  bottomRight: { rotate: -4, x: 14,  y: 20 },
};

function Tile({
  src,
  alt,
  variants,
  staticStyle,
  className,
  zIndex,
  shouldAnimate,
}: {
  src: string;
  alt: string;
  variants: Variants;
  staticStyle: { rotate: number; x: number; y: number };
  className: string;
  zIndex: number;
  shouldAnimate: boolean;
}) {
  return (
    <motion.div
      className={`absolute overflow-hidden rounded-[1.6rem] bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.14)] ${className}`}
      variants={shouldAnimate ? variants : undefined}
      whileHover={shouldAnimate ? "hover" : undefined}
      animate={shouldAnimate ? "animate" : undefined}
      style={{ zIndex, ...(shouldAnimate ? {} : staticStyle) }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.1rem]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 44vw, (max-width: 1024px) 12rem, 13rem"
        />
      </div>
    </motion.div>
  );
}

export default function ImageTilesVertical({
  topLeftImage,
  topRightImage,
  bottomLeftImage,
  bottomRightImage,
}: ImageTilesVerticalProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <motion.div
      className="relative mx-auto my-8 h-[34rem] w-[22rem] sm:h-[38rem] sm:w-[25rem] lg:my-0 lg:h-[40rem] lg:w-[27rem]"
      variants={containerVariants}
      initial={shouldAnimate ? "initial" : false}
      animate={shouldAnimate ? "animate" : undefined}
      style={!shouldAnimate ? { opacity: 1 } : undefined}
    >
      <Tile
        src={topLeftImage}
        alt="Top left KTP moment"
        variants={topLeftVariants}
        staticStyle={staticPositions.topLeft}
        className="left-0 top-0 h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={30}
        shouldAnimate={shouldAnimate}
      />
      <Tile
        src={topRightImage}
        alt="Top right KTP moment"
        variants={topRightVariants}
        staticStyle={staticPositions.topRight}
        className="right-0 top-4 h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={20}
        shouldAnimate={shouldAnimate}
      />
      <Tile
        src={bottomLeftImage}
        alt="Bottom left KTP moment"
        variants={bottomLeftVariants}
        staticStyle={staticPositions.bottomLeft}
        className="left-2 bottom-[5.5rem] h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={25}
        shouldAnimate={shouldAnimate}
      />
      <Tile
        src={bottomRightImage}
        alt="Bottom right KTP moment"
        variants={bottomRightVariants}
        staticStyle={staticPositions.bottomRight}
        className="right-1 bottom-0 h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={15}
        shouldAnimate={shouldAnimate}
      />
    </motion.div>
  );
}
