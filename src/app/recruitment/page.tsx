import { Navbar, Footer, PageHero } from "@/components";
import Schedule from "./rush";

export default function RecruitmentPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Recruitment"
        title="Recruitment will return in Fall 2026."
        description="Applications are currently closed. You can still review the basics and stay updated for Fall 2026."
        image="/image/wilson.jpg"
      />
      <Schedule />
      <Footer />
    </>
  );
}
