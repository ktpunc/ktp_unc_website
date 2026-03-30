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
      <div className="relative pt-28 pb-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #13294B 0%, #1e3f70 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow" style={{ color: '#7BBDE4' }}>Our Chapter</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3">Meet the Members</h1>
          <p className="text-white/60 text-lg">50+ driven individuals shaping the future of tech at UNC.</p>
        </div>
      </div>

      {/* Sticky tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex overflow-x-auto gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                  active === tab
                    ? "border-blue text-blue"
                    : "border-transparent text-slate-500 hover:text-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 min-h-screen">
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
