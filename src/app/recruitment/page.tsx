import { Navbar, Footer, PageHero } from "@/components";
import Schedule from "./rush";

export default function RecruitmentPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Recruitment"
        title="Spring 2027 Recruitment"
        description="Applications are currently closed. Explore eligibility and stay tuned for Spring 2027 recruitment dates, events, and application details."
        image="/image/wilson.jpg"
      />
      <Schedule />
      <Footer />
    </>
  );
}
