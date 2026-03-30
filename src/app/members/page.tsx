"use client";
import { Navbar, Footer } from "@/components";
import ExecutiveBoard from "./executive_board";
import Class_2026 from "./gen_body_2026";
import Class_2027 from "./gen_body_2027";
import Class_2028 from "./gen_body_2028";
import Alumni from "./past_alumni";
import { useState } from "react";

const tabs = ["Executive Board", "Class of 2026", "Class of 2027", "Class of 2028", "Alumni"];

export default function MembersPage() {
  const [active, setActive] = useState("Executive Board");

  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="relative pt-28 pb-12 bg-slate-950 mesh-bg text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="section-label">Our Chapter</div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
            Meet the <span className="gradient-text">Members</span>
          </h1>
          <p className="text-slate-400 text-lg">50+ driven individuals shaping the future of tech at UNC.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-xl border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex overflow-x-auto gap-1 py-3 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === tab
                    ? "bg-blue-500 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/8"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {active === "Executive Board" && <ExecutiveBoard />}
          {active === "Class of 2026" && <Class_2026 />}
          {active === "Class of 2027" && <Class_2027 />}
          {active === "Class of 2028" && <Class_2028 />}
          {active === "Alumni" && <Alumni />}
        </div>
      </div>

      <Footer />
    </>
  );
}
