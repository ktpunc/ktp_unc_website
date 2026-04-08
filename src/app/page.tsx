import dynamic from "next/dynamic";
import { Navbar, Footer } from "@/components";
import Hero from "./hero";

const WelcomeSection = dynamic(() => import("./welcomeSection"));
const ToAbout = dynamic(() => import("./go_to_about"));
const ToMembers = dynamic(() => import("./go_to_members"));

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
