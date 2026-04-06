import { Navbar, Footer, PageHero } from "@/components";
import FAQ from "./faq";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="FAQ"
        title="Everything you need to know before recruitment."
        description="From eligibility and time commitment to culture and fit, this is the quickest way to get clear on what KTP is about."
        image="/image/building3.jpg"
      />
      <FAQ />
      <Footer />
    </>
  );
}
