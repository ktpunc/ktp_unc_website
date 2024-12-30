"use client";

import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Mailing_List from "./mailing_list";
import To_Recruitment from "./go_to_recruitment";
import To_About from "./go_to_about";
import To_Members from "./go_to_members";
import Carasoul from "./Carasoul";



export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <To_Recruitment />
      <To_About />
      <To_Members />
      <Mailing_List />
      <Carasoul />
      <Footer />
    </>
  );
}
