import React from "react";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={href}>
        <span className="font-medium hover:underline transition-all text-gray-800">
          {children}
        </span>
      </Link>
    </li>
  );
}

export function Navbar() {
  return (
    // Set a fixed height on the nav
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-300 shadow h-20">
      {/* Make the child container fill the full height */}
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <img
              src="/image/ktp_logo.png"
              alt="Logo"
              className="h-10 transition-opacity duration-300 opacity-100"
            />
          </Link>
          <span className="text-lg font-bold text-gray-900">
            Kappa Theta Pi
          </span>
        </div>

        {/* Middle Section: Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 flex-grow justify-center -ml-14">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-us">About</NavItem>
          <NavItem href="/members">Members</NavItem>
          <NavItem href="/recruitment">Recruitment</NavItem>
          <NavItem href="/faq">FAQ</NavItem>
        </ul>

        {/* Right Section: Social Links */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/company/ktp-unc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin text-xl text-gray-800"></i>
            </Link>
            <Link
              href="https://www.instagram.com/ktpunc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram text-xl text-gray-800"></i>
            </Link>
            <Link href="mailto:uncktp@gmail.com">
              <i className="fa-solid fa-envelope text-xl text-gray-800"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;