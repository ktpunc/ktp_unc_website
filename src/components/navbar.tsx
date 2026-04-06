"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 pt-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-[4.8rem] items-center justify-between gap-3 rounded-[1.6rem] border border-slate-200 bg-white px-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-2 rounded-full px-1 py-1">
              <Link
                href="/"
                aria-label="Go to homepage"
                className="group flex min-w-0 items-center gap-2.5 rounded-full px-2 py-1 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 shadow-sm ring-1 ring-slate-200 transition-all duration-200 group-hover:scale-[1.05] group-hover:shadow-[0_10px_20px_rgba(75,156,211,0.14)] group-hover:ring-blue/20">
                  <Image src="/image/ktp_logo.png" alt="KTP Logo" width={28} height={28} className="h-7 w-7 object-contain" priority />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-blue transition-colors duration-200 group-hover:text-navy-light">
                    UNC Eta Chapter
                  </p>
                  <span className="block truncate text-[0.96rem] font-black tracking-tight text-navy transition-colors duration-200 group-hover:text-blue sm:text-[1rem]">
                    Kappa Theta Pi
                  </span>
                </div>
              </Link>
            </div>

            <div className="hidden items-center gap-1.5 rounded-full bg-slate-50 p-1 ring-1 ring-slate-200 lg:flex">
              {links.map(({ href, label }) => {
                const active = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative flex rounded-full px-4 py-2.5 text-[0.92rem] font-semibold tracking-[0.01em] transition-all duration-200 ${
                      active
                        ? "bg-[linear-gradient(135deg,#13294B_0%,#1d467b_100%)] text-white shadow-[0_10px_25px_rgba(19,41,75,0.24)]"
                        : "text-slate-700 hover:-translate-y-0.5 hover:text-navy"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition-transform duration-200 active:scale-95 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-navy transition-all duration-200 ${
                    menuOpen ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-navy transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[18px] block h-0.5 w-5 rounded-full bg-navy transition-all duration-200 ${
                    menuOpen ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/25 transition-opacity duration-200 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`fixed left-4 right-4 top-[5.9rem] z-50 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-200 lg:hidden ${
          menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="space-y-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                  active ? "bg-navy text-white" : "text-navy hover:bg-slate-100"
                }`}
              >
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-navy">Stay connected</p>
            <p className="text-xs text-slate-500">Follow updates and recruitment news.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/company/ktp-unc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KTP UNC LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:text-navy"
            >
              <i className="fa-brands fa-linkedin text-base" />
            </Link>
            <Link
              href="https://www.instagram.com/ktpunc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KTP UNC Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:text-navy"
            >
              <i className="fa-brands fa-instagram text-base" />
            </Link>
            <Link
              href="mailto:uncktp@gmail.com"
              aria-label="Email KTP UNC"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:text-navy"
            >
              <Mail className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
