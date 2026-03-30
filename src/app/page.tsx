"use client";

import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import WelcomeSection from "./welcomeSection";
import ToAbout from "./go_to_about";
import ToMembers from "./go_to_members";
import ToRecruitment from "./go_to_recruitment";
import Carousel from "./Carasoul";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <ToAbout />
      <ToMembers />
      <ToRecruitment />
      <Carousel />
      <Footer />
    </>
  );
}
