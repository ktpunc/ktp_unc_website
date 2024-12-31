import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* White Padding for Smooth Transition */}

      <div className="py-4">
        <div className="container mx-auto px-4 md:px-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            {/* About Section */}
            <div className="flex flex-col gap-2">
              <Typography
                className="text-lg md:text-xl text-white font-medium leading-relaxed"
              >
                Kappa Theta Pi is UNC's premier tech-focused professional
                fraternity, fostering innovation and leadership in technology
                and beyond.
              </Typography>
            </div>

            {/* Quick Links */}
            <div>
              <Typography
                variant="h6"
                className="mb-2 font-bold text-white text-md"
              >
                Quick Links
              </Typography>
              <ul className="flex flex-col gap-1 text-sm">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="hover:text-gray-300">
                    Members
                  </Link>
                </li>
                <li>
                  <Link href="/recruitment" className="hover:text-gray-300">
                    Recruitment
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <Typography
                variant="h6"
                className="mb-2 font-bold text-white text-md"
              >
                Connect With Us
              </Typography>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/company/ktp-unc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin text-md hover:text-gray-300"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/ktpunc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram text-md hover:text-gray-300"></i>
                </Link>
                <Link href="mailto:uncktp@gmail.com">
                  <i className="fa-solid fa-envelope text-md hover:text-gray-300"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-4 border-t border-gray-700"></div>

          {/* Bottom Section */}
          <div className="mt-2 text-center">
            <Typography
              color="blue-gray"
              className="font-normal text-gray-400 text-xs"
            >
              &copy; {CURRENT_YEAR}, Designed by Kappa Theta Pi @ UNC. All Rights
              Reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;