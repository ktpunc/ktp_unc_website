import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/faq", label: "FAQ" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/ktp-unc/",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/ktpunc/",
    icon: "fa-instagram",
    label: "Instagram",
  },
  {
    href: "mailto:uncktp@gmail.com",
    icon: "fa-envelope",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-blue/10 bg-[linear-gradient(180deg,#fbfeff_0%,#f2f8fd_100%)] text-navy">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-12">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-200/80 pb-10 md:grid-cols-[1.15fr_0.75fr_0.85fr]">
          <div>
            <div className="group mb-5 flex w-fit items-center gap-3 rounded-2xl px-1 py-1 transition-all duration-200 hover:-translate-y-0.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-pale ring-1 ring-blue/10 transition-all duration-200 group-hover:scale-[1.04] group-hover:bg-white group-hover:shadow-[0_10px_24px_rgba(75,156,211,0.14)]">
                <Image src="/image/ktp_logo.png" alt="KTP" width={30} height={30} className="h-7 w-7 object-contain" />
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-blue/70 transition-colors duration-200 group-hover:text-blue">UNC Eta Chapter</p>
                <span className="text-lg font-black tracking-tight text-navy transition-colors duration-200 group-hover:text-blue">Kappa Theta Pi</span>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-600">
              A professional tech community at UNC focused on growth, friendship, and building something that lasts beyond college.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon, label }) => {
                const isExternal = href.startsWith("http");
                const iconClass = icon === "fa-envelope" ? "fa-solid" : "fa-brands";

                return (
                  <Link
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:-translate-y-1 hover:rotate-[-4deg] hover:border-blue/30 hover:bg-blue-pale hover:text-navy"
                  >
                    <i className={`${iconClass} ${icon} text-sm`} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="md:border-l md:border-slate-200/80 md:pl-10">
            <h6 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-400">Pages</h6>
            <ul className="space-y-2">
              {navigationLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center rounded-full px-2 py-1 text-sm font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-navy"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-400">Contact</h6>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <Link href="mailto:uncktp@gmail.com" className="inline-flex rounded-full py-1 transition-all duration-200 hover:-translate-y-0.5 hover:text-navy">
                  uncktp@gmail.com
                </Link>
              </p>
              <p>University of North Carolina</p>
              <p>Chapel Hill, NC</p>
              <p className="pt-2 text-blue/70">Applications open soon.</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="transition-colors duration-200 hover:text-slate-700">© {CURRENT_YEAR} Kappa Theta Pi, Eta Chapter at UNC-Chapel Hill.</p>
          <div
            className="group inline-flex w-fit items-center gap-1.5 rounded-full border border-transparent px-2.5 py-1 text-slate-500 transition-all duration-200 hover:border-blue/15 hover:bg-white hover:text-navy"
          >
            <span className="font-mono text-[11px] tracking-[0.08em]">
              cout &lt;&lt; &quot;made with
            </span>
            <Heart className="h-3 w-3 transition-transform duration-200 group-hover:scale-110 group-hover:text-blue" />
            <span className="font-mono text-[11px] tracking-[0.08em]">
              love at UNC&quot; &lt;&lt; endl;
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
