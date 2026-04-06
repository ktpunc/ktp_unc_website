type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_72%,#f5f9fd_100%)]">
      <div className="absolute inset-0">
        <div className="hero-glow-drift absolute left-[-6rem] top-[8rem] h-72 w-72 rounded-full bg-blue/18 blur-3xl" />
        <div className="hero-glow-drift-delayed hero-glow-drift absolute left-[10%] bottom-[12%] h-80 w-80 rounded-full bg-blue-pale blur-3xl" />
        <div className="hero-glow-drift absolute right-[-4rem] top-[6rem] h-72 w-72 rounded-full bg-blue-light/22 blur-3xl" />
        <div className="hero-glow-drift-delayed hero-glow-drift absolute right-[12%] bottom-[10%] h-64 w-64 rounded-full bg-navy/10 blur-3xl" />
        <div className="absolute inset-0 opacity-55" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(19,41,75,0.08) 1px, transparent 0)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 82%)",
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-32 text-center md:pb-24 md:pt-36">
        <span
          className="hero-panel-in eyebrow"
          style={{ animationDelay: "100ms", animationFillMode: "both" }}
        >
          {eyebrow}
        </span>

        <h1
          className="hero-panel-in mx-auto max-w-4xl text-5xl font-black leading-[1] tracking-tight text-navy sm:text-6xl lg:text-[5.15rem]"
          style={{ animationDelay: "180ms", animationFillMode: "both" }}
        >
          {title}
        </h1>

        <p
          className="hero-panel-in mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
          style={{ animationDelay: "320ms", animationFillMode: "both" }}
        >
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7fbff] to-transparent" />
    </section>
  );
}

export default PageHero;
