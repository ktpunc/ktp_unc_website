import Link from "next/link";
import Image from "next/image";

const heroLines = [
  { text: "UNC's Premier", accent: false },
  { text: "Professional Tech Fraternity", accent: true },
];

function FlowLine({
  text,
  accent,
  startIndex,
}: {
  text: string;
  accent: boolean;
  startIndex: number;
}) {
  const words = text.split(" ");
  let letterIndex = startIndex;

  return (
    <span className={`hero-flow-line ${accent ? "text-blue" : "text-navy"}`}>
      {words.map((word) => {
        const currentStart = letterIndex;
        letterIndex += word.length;

        return (
          <span key={`${word}-${currentStart}`} className="hero-flow-word">
            {word.split("").map((letter, index) => (
              <span
                key={`${word}-${index}`}
                className="hero-flow-letter"
                style={{ animationDelay: `${(currentStart + index) * 38}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}

type CardDef = {
  src: string;
  aspect: string;
  w: number;       // px width for Image + inline style
  rotate: string;  // inline deg string e.g. "12deg"
  float: string;
  delay: string;
  /** Preload for LCP — use sparingly (hero collage only). */
  priority?: boolean;
  // absolute position within the column container
  top: string;
  left?: string;
  right?: string;
};

const leftCards: CardDef[] = [
  {
    src: "/carasoul/photo1.jpg",
    aspect: "aspect-[3/4]",
    w: 200,
    rotate: "12deg",
    float: "hero-photo-card-float",
    delay: "600ms",
    priority: true,
    top: "2%",
    left: "18%",
  },
  {
    src: "/carasoul/photo7.jpg",
    aspect: "aspect-[3/4]",
    w: 180,
    rotate: "-8deg",
    float: "hero-photo-card-float-b",
    delay: "760ms",
    top: "38%",
    left: "4%",
  },
];

const rightCards: CardDef[] = [
  {
    src: "/carasoul/photo5.JPG",
    aspect: "aspect-[3/4]",
    w: 170,
    rotate: "-10deg",
    float: "hero-photo-card-float-b",
    delay: "680ms",
    priority: true,
    top: "0%",
    right: "6%",
  },
  {
    src: "/carasoul/photo9.JPG",
    aspect: "aspect-[4/3]",
    w: 210,
    rotate: "5deg",
    float: "hero-photo-card-float",
    delay: "840ms",
    top: "30%",
    right: "16%",
  },
  {
    src: "/carasoul/photo8.jpg",
    aspect: "aspect-[3/4]",
    w: 175,
    rotate: "-4deg",
    float: "hero-photo-card-float-c",
    delay: "1000ms",
    top: "56%",
    right: "2%",
  },
];

function PhotoCard({ card }: { card: CardDef }) {
  return (
    <div
      className="hero-photo-card absolute"
      style={{
        top: card.top,
        left: card.left,
        right: card.right,
        width: card.w,
        animationDelay: card.delay,
        animationFillMode: "both",
      }}
    >
      {/* rotation wrapper — permanent tilt */}
      <div style={{ transform: `rotate(${card.rotate})` }}>
        {/* float animation wrapper — translateY oscillation */}
        <div className={card.float}>
          <div className="overflow-hidden rounded-2xl shadow-[0_10px_36px_rgba(15,23,42,0.15)] ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.04]">
            <Image
              src={card.src}
              alt="KTP members"
              width={card.w * 2}
              height={card.w * 2}
              sizes="(max-width: 1024px) 0px, 220px"
              quality={90}
              priority={card.priority}
              className={`${card.aspect} w-full object-cover`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eaf4fc] via-white to-white">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(19,41,75,0.07) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 70%)",
        }}
      />

      {/* Soft glow blobs — hidden on mobile to avoid expensive GPU blur */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute left-[5%] top-[20%] h-64 w-64 rounded-full bg-blue/15 blur-2xl" />
        <div className="absolute right-[5%] top-[15%] h-72 w-72 rounded-full bg-blue-light/20 blur-2xl" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[90rem] px-6 py-28">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_520px_1fr]">

            {/* Left photos */}
            <div className="relative hidden lg:block" style={{ height: 520 }}>
              {leftCards.map((card) => <PhotoCard key={card.src} card={card} />)}
            </div>

            {/* Center content */}
            <div className="mx-auto w-full max-w-[44rem] text-center">
              <span
                className="hero-panel-in eyebrow"
                style={{ animationDelay: "120ms", animationFillMode: "both" }}
              >
                Eta Chapter · UNC-Chapel Hill
              </span>

              <h1 className="mb-6 mt-3 text-[2.4rem] font-black leading-[0.98] tracking-tight xs:text-[3rem] sm:text-[4rem] md:text-[4.6rem] lg:text-7xl">
                <span className="sr-only">UNC&apos;s Premier Professional Tech Frat</span>
                {heroLines.map((line, index) => (
                  <FlowLine
                    key={line.text}
                    text={line.text}
                    accent={line.accent}
                    startIndex={index === 0 ? 0 : heroLines[0].text.replaceAll(" ", "").length}
                  />
                ))}
              </h1>

              <p
                className="hero-panel-in mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600"
                style={{ animationDelay: "920ms", animationFillMode: "both" }}
              >
                UNC&apos;s first co-ed professional technology fraternity, dedicated to the professional, social, and technical development of students with a passion for technology.
              </p>

              <div
                className="hero-panel-in flex flex-col items-center justify-center gap-3 sm:flex-row"
                style={{ animationDelay: "1060ms", animationFillMode: "both" }}
              >
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="btn-navy opacity-70 cursor-not-allowed"
                  style={{ transform: "none", boxShadow: "none" }}
                >
                  Applications Open Soon
                </button>
                <Link href="/about-us" className="btn-outline-navy">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right photos */}
            <div className="relative hidden lg:block" style={{ height: 520 }}>
              {rightCards.map((card) => <PhotoCard key={card.src} card={card} />)}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500">Scroll</span>
        <div className="h-9 w-6 rounded-full border border-slate-300/90">
          <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-slate-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
