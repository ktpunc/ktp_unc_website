import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import WelcomeSection from "./welcomeSection";
import ToAbout from "./go_to_about";
import ToMembers from "./go_to_members";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <ToAbout />
      <ToMembers />
      <Footer />
    </>
  );
}
