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
      <Link href={href}>
        <Typography
          as="span"
          className="font-medium hover:underline transition-all text-gray-800"
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <MTNavbar
        fullWidth
        shadow
        blurred={false}
        color="white"
        className="sticky top-0 z-50 bg-white border-b border-gray-300"
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/image/ktp_logo.png"
                alt="Logo"
                className="h-10 transition-opacity duration-300 opacity-100"
              />
            </Link>
            <Typography variant="h6" className="ml-3 text-lg font-bold text-gray-900">
              Kappa Theta Pi
            </Typography>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about-us">About</NavItem>
            <NavItem href="/members">Members</NavItem>
            <NavItem href="/recruitment">Recruitment</NavItem>
            <NavItem href="/faq">FAQ</NavItem>
          </ul>

          {/* Social Links and Hamburger */}
          <div className="flex items-center lg:hidden">
            <IconButton
              onClick={toggleMobileMenu}
              className="text-gray-900 transition-all"
            >
              <i className={`fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </IconButton>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="https://www.linkedin.com/company/ktp-unc/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-xl text-gray-800"></i>
            </Link>
            <Link href="https://www.instagram.com/ktpunc/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-xl text-gray-800"></i>
            </Link>
            <Link href="mailto:uncktp@gmail.com">
              <i className="fa-solid fa-envelope text-xl text-gray-800"></i>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about-us">About</NavItem>
              <NavItem href="/members">Members</NavItem>
              <NavItem href="/recruitment">Recruitment</NavItem>
              <NavItem href="/faq">FAQ</NavItem>
            </ul>
          </div>
        )}
      </MTNavbar>
    </>
  );
}

export default Navbar;