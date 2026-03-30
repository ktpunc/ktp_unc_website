import { Navbar, Footer } from "@/components";
import About from "./about";
import Pillars from "./pillars";
import Testimonials from "./testimonials";
import Companies from "./companies";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Pillars />
      <Testimonials />
      <Companies />
      <Footer />
    </>
  );
}
