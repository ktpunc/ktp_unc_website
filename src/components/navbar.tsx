"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-white shadow-nav" : "bg-white/0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/image/ktp_logo.png" alt="KTP Logo" className="h-8 w-auto" />
            <span className={`font-bold text-[15px] tracking-tight transition-colors duration-200 ${scrolled ? "text-navy" : "text-white"}`}>
              Kappa Theta Pi
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? active ? "text-blue" : "text-slate-600 hover:text-navy"
                        : active ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/company/ktp-unc/"
              target="_blank" rel="noopener noreferrer"
              className={`transition-colors duration-200 text-lg ${scrolled ? "text-slate-500 hover:text-navy" : "text-white/70 hover:text-white"}`}
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
            <Link
              href="https://www.instagram.com/ktpunc/"
              target="_blank" rel="noopener noreferrer"
              className={`transition-colors duration-200 text-lg ${scrolled ? "text-slate-500 hover:text-navy" : "text-white/70 hover:text-white"}`}
            >
              <i className="fa-brands fa-instagram" />
            </Link>
            <Link href="/recruitment" className="btn-navy text-sm px-4 py-2">
              Apply Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-250 ${menuOpen ? "rotate-45 translate-y-2" : ""} ${scrolled ? "bg-navy" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-250 ${menuOpen ? "opacity-0" : ""} ${scrolled ? "bg-navy" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-250 ${menuOpen ? "-rotate-45 -translate-y-2" : ""} ${scrolled ? "bg-navy" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden flex flex-col ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-2xl font-semibold transition-colors ${
                pathname === href ? "text-blue" : "text-navy hover:text-blue"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-6 mt-2">
            <Link href="https://www.linkedin.com/company/ktp-unc/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-navy text-2xl"><i className="fa-brands fa-linkedin" /></Link>
            <Link href="https://www.instagram.com/ktpunc/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-navy text-2xl"><i className="fa-brands fa-instagram" /></Link>
            <Link href="mailto:uncktp@gmail.com" className="text-slate-500 hover:text-navy text-2xl"><i className="fa-solid fa-envelope" /></Link>
          </div>
          <Link href="/recruitment" className="btn-navy mt-2">Apply Now</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
