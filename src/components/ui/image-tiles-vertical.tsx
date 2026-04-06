"use client";

import { motion, type Variants } from "framer-motion";

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

function Tile({
  src,
  alt,
  variants,
  className,
  zIndex,
}: {
  src: string;
  alt: string;
  variants: Variants;
  className: string;
  zIndex: number;
}) {
  return (
    <motion.div
      className={`absolute overflow-hidden rounded-[1.6rem] bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.14)] ${className}`}
      variants={variants}
      whileHover="hover"
      animate="animate"
      style={{ zIndex }}
    >
      <img src={src} alt={alt} className="h-full w-full rounded-[1.1rem] object-cover" />
    </motion.div>
  );
}

export default function ImageTilesVertical({
  topLeftImage,
  topRightImage,
  bottomLeftImage,
  bottomRightImage,
}: ImageTilesVerticalProps) {
  return (
    <motion.div
      className="relative mx-auto my-8 h-[34rem] w-[22rem] sm:h-[38rem] sm:w-[25rem] lg:my-0 lg:h-[40rem] lg:w-[27rem]"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Tile
        src={topLeftImage}
        alt="Top left KTP moment"
        variants={topLeftVariants}
        className="left-0 top-0 h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={30}
      />
      <Tile
        src={topRightImage}
        alt="Top right KTP moment"
        variants={topRightVariants}
        className="right-0 top-4 h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={20}
      />
      <Tile
        src={bottomLeftImage}
        alt="Bottom left KTP moment"
        variants={bottomLeftVariants}
        className="left-2 bottom-[5.5rem] h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={25}
      />
      <Tile
        src={bottomRightImage}
        alt="Bottom right KTP moment"
        variants={bottomRightVariants}
        className="right-1 bottom-0 h-[14rem] w-[11rem] sm:h-[15rem] sm:w-[12rem] lg:h-[16rem] lg:w-[13rem]"
        zIndex={15}
      />
    </motion.div>
  );
}
