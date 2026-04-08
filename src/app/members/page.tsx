"use client";
import { Navbar, Footer, PageHero } from "@/components";
import { MembersTabPanels, type MembersTabId } from "./members-tab-panels";
import { useState } from "react";

const tabs: MembersTabId[] = [
  "Executive Board",
  "Class of 2026",
  "Class of 2027",
  "Class of 2028",
  "Alumni",
];

export default function MembersPage() {
  const [active, setActive] = useState<MembersTabId>("Executive Board");

  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Our Chapter"
        title="Meet the Chapter"
        description="Our members come from all kinds of majors and backgrounds, brought together by a shared interest in technology and a community that genuinely supports each other."
        image="/image/building2.jpg"
      />

      <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] py-8">
        <div className="mx-auto max-w-[96rem] px-4 sm:px-6">
          <div className="surface-hover-glow mx-auto w-full max-w-fit rounded-[1.75rem] border border-slate-200 bg-white px-3 py-3 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
            <p className="mb-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Browse By Class
            </p>
            <nav className="mx-auto w-full overflow-x-auto rounded-full bg-slate-50 p-1.5 ring-1 ring-slate-200/80 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex min-w-max items-center gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`flex-shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-200 sm:px-4 sm:py-2.5 sm:text-sm md:px-5 ${
                      active === tab
                        ? "bg-navy text-white shadow-[0_8px_20px_rgba(47,100,147,0.22)]"
                        : "text-slate-500 hover:bg-white hover:text-navy"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#eff6fc_100%)]">
        <div className="mx-auto max-w-[96rem] px-6 py-12">
          <div className="surface-hover-float rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] md:p-8">
          <MembersTabPanels active={active} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
