import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/members", label: "Members" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/6">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/image/ktp_logo.png" alt="KTP Logo" className="h-8 w-auto" />
              <span className="font-bold text-white text-base">Kappa Theta Pi</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              UNC's premier professional technology organization — developing leaders, engineers, and innovators through community, mentorship, and ambition.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/ktp-unc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
              >
                <i className="fa-brands fa-linkedin text-sm" />
              </Link>
              <Link
                href="https://www.instagram.com/ktpunc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
              >
                <i className="fa-brands fa-instagram text-sm" />
              </Link>
              <Link
                href="mailto:uncktp@gmail.com"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
              >
                <i className="fa-solid fa-envelope text-sm" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h6>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Get In Touch
            </h6>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Interested in joining or partnering with KTP? We'd love to hear from you.
            </p>
            <Link
              href="mailto:uncktp@gmail.com"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              uncktp@gmail.com →
            </Link>
            <div className="mt-6">
              <Link href="/recruitment" className="btn-primary text-sm px-5 py-2.5">
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div className="divider-glow mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-xs">
          <p>© {CURRENT_YEAR} Kappa Theta Pi — Eta Chapter at UNC-Chapel Hill. All rights reserved.</p>
          <p className="text-slate-600">Built by KTP ✦ Chapel Hill, NC</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
