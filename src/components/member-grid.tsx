"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const greekLetterMap: Record<string, string> = {
  Alpha: "α",
  Beta: "β",
  Gamma: "γ",
  Delta: "δ",
  Epsilon: "ε",
  Zeta: "ζ",
  Eta: "η",
  Theta: "θ",
};

function formatGreekLabel(text: string) {
  return Object.entries(greekLetterMap).reduce(
    (result, [name, letter]) => result.replace(new RegExp(`\\b${name}\\b`, "g"), letter),
    text
  );
}

function getGreekLetter(text: string) {
  return greekLetterMap[text] ?? text;
}

type Member = {
  name: string;
  image: string;
  linkedin: string;
  subtitle?: string;
  badge?: string;
  tag?: string;
  tagClassName?: string;
  subtitleClassName?: string;
};

type MemberGridProps = {
  members: Member[];
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MemberGrid({ members }: MemberGridProps) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {members.map((member) => (
        <motion.div key={member.name} variants={cardVariants}>
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto flex w-full max-w-[240px] flex-col"
          >
            <div className="member-card-hover overflow-hidden rounded-[1.6rem] border border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)] shadow-[0_16px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
              <div className="relative mx-4 mt-4 aspect-[4/4.2] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1536px) 20vw, 16vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/82 to-navy/28 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-xl border border-white/10 bg-navy/78 px-3 py-2.5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="flex items-center text-white/80">
                    <i className="fa-brands fa-linkedin text-sm" />
                  </span>
                  {member.tag && (
                    <span
                      className="text-[1.65rem] font-medium leading-none tracking-tight text-white/95"
                      style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
                    >
                      {getGreekLetter(member.tag)}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1.5 px-5 pb-5 pt-4">
                <p className="text-base font-bold leading-snug tracking-tight text-navy transition-colors duration-200 group-hover:text-blue">
                  {member.name}
                </p>
                {member.subtitle && (
                  <p className={`text-sm leading-6 text-slate-600 ${member.subtitleClassName ?? ""}`}>
                    {formatGreekLabel(member.subtitle)}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
