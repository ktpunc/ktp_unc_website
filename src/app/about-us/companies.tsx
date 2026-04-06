"use client";

import { useInView } from "@/hooks/useInView";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import accentureLogo from "../../ASSETS/Accenture Logo.png";
import wellsFargoLogo from "../../ASSETS/Wells Fargo.png";
import qualcommLogo from "../../ASSETS/Qualcomm.png";
import lockheedLogo from "../../ASSETS/Lockheed.png";
const simpleIcons = require("simple-icons/icons.json");

const companies = [
  { name: "Meta", domain: "meta.com", iconTitle: "Meta", className: "h-10" },
  { name: "Amazon", domain: "amazon.com", className: "h-10" },
  { name: "Microsoft", domain: "microsoft.com", className: "h-10" },
  { name: "JPMorgan Chase", domain: "jpmorganchase.com", className: "h-8" },
  { name: "Bank of America", domain: "bankofamerica.com", iconTitle: "Bank of America", className: "h-9" },
  { name: "Bain & Company", domain: "bain.com", className: "h-10" },
  { name: "Morgan Stanley", domain: "morganstanley.com", className: "h-8" },
  { name: "BCG", domain: "bcg.com", className: "h-10" },
  { name: "Oliver Wyman", domain: "oliverwyman.com", className: "h-9" },
  { name: "OpenAI", domain: "openai.com", className: "h-10" },
  { name: "Oracle", domain: "oracle.com", className: "h-8" },
  { name: "Google", domain: "google.com", iconTitle: "Google", className: "h-9" },
  { name: "Cloudflare", domain: "cloudflare.com", iconTitle: "Cloudflare", className: "h-9" },
  { name: "Nike", domain: "nike.com", iconTitle: "Nike", className: "h-10" },
  { name: "Pendo", domain: "pendo.io", className: "h-9" },
  { name: "Apple", domain: "apple.com", iconTitle: "Apple", className: "h-10" },
  { name: "MongoDB", domain: "mongodb.com", iconTitle: "MongoDB", className: "h-10" },
  { name: "Headspace", domain: "headspace.com", iconTitle: "Headspace", className: "h-10" },
  { name: "Agave", domain: "agaveapi.com", className: "h-9" },
  { name: "CLEAR", domain: "clearme.com", className: "h-8" },
  { name: "Uber", domain: "uber.com", iconTitle: "Uber", className: "h-10" },
  { name: "Instagram", domain: "instagram.com", iconTitle: "Instagram", className: "h-9" },
  { name: "Atlassian", domain: "atlassian.com", iconTitle: "Atlassian", className: "h-10" },
  { name: "Datadog", domain: "datadoghq.com", iconTitle: "Datadog", className: "h-10" },
  { name: "Plaid", domain: "plaid.com", className: "h-9" },
  { name: "MLB", domain: "mlb.com", iconTitle: "MLB", className: "h-10" },
  { name: "Red Hat", domain: "redhat.com", iconTitle: "Red Hat", className: "h-10" },
  { name: "PayPal", domain: "paypal.com", iconTitle: "PayPal", className: "h-9" },
  { name: "IBM", domain: "ibm.com", className: "h-10" },
  { name: "Accenture", asset: accentureLogo, className: "h-10" },
  { name: "Wells Fargo", asset: wellsFargoLogo, className: "h-10" },
  { name: "Qualcomm", asset: qualcommLogo, className: "h-10" },
  { name: "Lockheed Martin", asset: lockheedLogo, className: "h-9" },
];

type SimpleIcon = {
  title: string;
  slug: string;
  hex: string;
  path?: string;
};

const iconMap = new Map(
  (simpleIcons as SimpleIcon[]).map((icon) => [icon.title.toLowerCase(), icon])
);

function CompanyLogo({
  name,
  domain,
  iconTitle,
  asset,
  className,
}: {
  name: string;
  domain?: string;
  iconTitle?: string;
  asset?: any;
  className: string;
}) {
  if (asset) {
    return (
      <Image
        src={asset}
        alt={`${name} logo`}
        className={`${className} w-auto object-contain`}
      />
    );
  }

  const icon = iconMap.get((iconTitle ?? name).toLowerCase());

  if (icon?.path) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-label={`${name} logo`}
        role="img"
        className={`${className} w-auto`}
      >
        <path fill={`#${icon.hex}`} d={icon.path} />
      </svg>
    );
  }

  if (!domain) {
    return null;
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${name} logo`}
      className={`${className} w-auto object-contain`}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

export default function Companies() {
  const { ref, inView } = useInView();

  return (
    <section className="border-t border-blue-mid bg-[linear-gradient(180deg,#eef6fc_0%,#f8fbfe_100%)] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${inView ? "visible" : ""}`}>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow">Alumni Network</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy">Where Our Alumni Work</h2>
            <div className="section-divider-center" />
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/65 px-6 py-8 shadow-[0_18px_44px_rgba(15,23,42,0.06)] backdrop-blur-sm md:px-10">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14 md:gap-y-10">
              {companies.map(({ name, domain, iconTitle, asset, className }) => (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="group flex h-14 items-center justify-center px-2 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <div className="opacity-85 transition-opacity duration-200 group-hover:opacity-100">
                        <CompanyLogo
                          name={name}
                          domain={domain}
                          iconTitle={iconTitle}
                          asset={asset}
                          className={className}
                        />
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-full border-slate-200 bg-white px-4 py-2 text-xs text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                    {name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
