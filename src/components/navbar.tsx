import React from "react";
import {
  Navbar as MTNavbar,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <a>
          <Typography
            as="span"
            className="font-medium hover:shadow-lg transition-shadow"
          >
            {children}
          </Typography>
        </a>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 ${
        isScrolling ? "border-b border-gray-700" : "border-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left Section (Logo) */}
        <Link href="/" passHref legacyBehavior>
          <a>
            <Typography
              variant="h6"
              className={`text-lg font-bold transition-colors duration-300 ${
                isScrolling ? "text-gray-900" : "text-white"
              }`}
            >
              Kappa Theta Pi
            </Typography>
          </a>
        </Link>

        {/* Middle Section (Nav Links) */}
        <ul
          className={`hidden lg:flex items-center justify-center gap-8 ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-us">About</NavItem>
          <NavItem href="/members">Members</NavItem>
          <NavItem href="/recruitment">Recruitment</NavItem>
          <NavItem href="/faq">FAQ</NavItem>
        </ul>

        {/* Right Section (Social Icons) */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex gap-8 items-center">
            <Link
              href="https://www.linkedin.com/company/ktp-unc/"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <IconButton
                  variant="text"
                  color={isScrolling ? "gray" : "white"}
                  size="sm"
                  className="p-0 flex items-center"
                >
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </IconButton>
              </a>
            </Link>
            <Link
              href="https://www.instagram.com/ktpunc/"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <IconButton
                  variant="text"
                  color={isScrolling ? "gray" : "white"}
                  size="sm"
                  className="p-0 flex items-center"
                >
                  <i className="fa-brands fa-instagram text-xl"></i>
                </IconButton>
              </a>
            </Link>
            <Link href="mailto:uncktp@gmail.com" passHref legacyBehavior>
              <a>
                <IconButton
                  variant="text"
                  color={isScrolling ? "gray" : "white"}
                  size="sm"
                  className="p-0 flex items-center"
                >
                  <i className="fa-solid fa-envelope text-xl"></i>
                </IconButton>
              </a>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            className="lg:hidden"
            onClick={handleOpen}
          >
            <i className={`fa ${open ? "fa-times" : "fa-bars"} text-xl`}></i>
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center gap-4 lg:hidden mt-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-us">About</NavItem>
          <NavItem href="/members">Members</NavItem>
          <NavItem href="/recruitment">Recruitment</NavItem>
          <NavItem href="/faq">FAQ</NavItem>
        </ul>
      )}
    </MTNavbar>
  );
}

export default Navbar;