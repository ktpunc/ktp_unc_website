import Link from "next/link";
import ImageReveal from "@/components/ui/image-tiles";

export default function Carousel() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Life at KTP</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy md:text-4xl">
            A little glimpse of the chapter outside the resume.
          </h2>
          <div className="section-divider-center" />
          <p className="text-lg leading-relaxed text-slate-600">
            From socials and retreats to everyday moments around campus, KTP feels just as much like a community as it does a professional org.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <ImageReveal
            leftImage="/carasoul/photo2.jpg"
            middleImage="/carasoul/photo5.JPG"
            rightImage="/carasoul/photo7.jpg"
          />
        </div>

        <div className="mt-2 flex justify-center">
          <Link href="/members" className="btn-outline-navy">
            Meet the People
          </Link>
        </div>
      </div>
    </section>
  );
}
