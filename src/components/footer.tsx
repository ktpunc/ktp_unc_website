import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/image/ktp_logo.png" alt="KTP" className="h-8 w-auto brightness-0 invert" />
              <span className="font-bold text-[15px]">Kappa Theta Pi</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              UNC's first co-ed professional technology organization — building leaders, engineers, and innovators since 2021.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/company/ktp-unc/", icon: "fa-linkedin" },
                { href: "https://www.instagram.com/ktpunc/", icon: "fa-instagram" },
              ].map(({ href, icon }) => (
                <Link key={icon} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/35 transition-all duration-200">
                  <i className={`fa-brands ${icon} text-sm`} />
                </Link>
              ))}
              <Link href="mailto:uncktp@gmail.com"
                className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/35 transition-all duration-200">
                <i className="fa-solid fa-envelope text-sm" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h6 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">Navigate</h6>
            <ul className="space-y-2.5">
              {["/", "/about-us", "/members", "/recruitment", "/faq"].map((href) => {
                const label = href === "/" ? "Home" : href.slice(1).replace("-", " ").replace(/^\w/, c => c.toUpperCase());
                return (
                  <li key={href}>
                    <Link href={href} className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">Get Involved</h6>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Interested in joining or partnering with KTP? We'd love to connect.
            </p>
            <Link href="mailto:uncktp@gmail.com" className="text-blue-light hover:text-white text-sm font-medium transition-colors">
              uncktp@gmail.com
            </Link>
            <div className="mt-5">
              <Link href="/recruitment" className="btn-blue text-sm px-4 py-2">
                Apply for Fall 2026
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          © {CURRENT_YEAR} Kappa Theta Pi — Eta Chapter, UNC-Chapel Hill. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
