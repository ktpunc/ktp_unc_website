import { Navbar, Footer, PageHero } from "@/components";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "./about";
import Pillars from "./pillars";
import Testimonials from "./testimonials";
import Companies from "./companies";

export default function AboutPage() {
  return (
    <TooltipProvider delayDuration={200}>
      <Navbar />
      <PageHero
        eyebrow="About KTP"
        title="A professional tech community built at Carolina."
        description="KTP brings together students who care about building strong careers, stronger friendships, and a lasting network in tech."
        image="/image/tower.jpg"
      />
      <About />
      <Pillars />
      <Testimonials />
      <Companies />
      <Footer />
    </TooltipProvider>
  );
}
