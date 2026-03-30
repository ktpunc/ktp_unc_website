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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/image/ktp_logo.png" alt="KTP Logo" className="h-8 w-auto" />
            <span className="font-bold text-white text-base tracking-tight">
              Kappa Theta Pi
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-white bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/8"
                    }`}
                    style={{ background: active ? 'rgba(255,255,255,0.1)' : undefined }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Social + Apply */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/ktp-unc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <i className="fa-brands fa-linkedin text-lg" />
            </Link>
            <Link
              href="https://www.instagram.com/ktpunc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </Link>
            <Link
              href="/recruitment"
              className="btn-primary text-sm px-5 py-2"
            >
              Apply Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-all duration-350 lg:hidden flex flex-col ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-6 px-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-2xl font-semibold transition-colors ${
                pathname === href ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-4 flex gap-6">
            <Link href="https://www.linkedin.com/company/ktp-unc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-2xl">
              <i className="fa-brands fa-linkedin" />
            </Link>
            <Link href="https://www.instagram.com/ktpunc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-2xl">
              <i className="fa-brands fa-instagram" />
            </Link>
            <Link href="mailto:uncktp@gmail.com" className="text-slate-400 hover:text-white transition-colors text-2xl">
              <i className="fa-solid fa-envelope" />
            </Link>
          </div>
          <Link href="/recruitment" className="btn-primary mt-2">
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
