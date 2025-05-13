// components
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import No_Rush_Info from "./no_rush";
import Rush_Info from "./rush";

export default function Campaign() {
  return (
    <>
      <Navbar />
      {<Hero /> }
      <No_Rush_Info />
      <Footer />
    </>
  );
}