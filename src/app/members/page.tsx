"use client"; // Add this at the top of the file

import { Navbar, Footer } from "@/components";
import ExecutiveBoard from "./executive_board";
import Class_2025 from "./gen_body_2025";
import Class_2026 from "./gen_body_2026";
import Class_2027 from "./gen_body_2027";
import Alumni from "./past_alumni";
import { useState } from "react";

const MembersPage = () => {
  const [activeTab, setActiveTab] = useState("Executive Board");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Executive Board":
        return <ExecutiveBoard />;
      case "Class of 2025":
        return <Class_2025 />;
      case "Class of 2026":
        return <Class_2026 />;
      case "Class of 2027":
        return <Class_2027 />;
      case "Alumni":
        return <Alumni />;
      default:
        return <ExecutiveBoard />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-ruddyBlue py-4">
        {/* Navbar Tabs */}
        <nav className="flex justify-center flex-wrap space-x-4 sm:space-x-8 text-sm sm:text-lg">
          {["Executive Board", "Class of 2025", "Class of 2026", "Class of 2027", "Alumni"].map((tab) => (
            <button
              key={tab}
              className={`text-white font-semibold pb-2 px-2 ${
                activeTab === tab ? "border-b-2 border-white" : ""
              } hover:text-gray-300`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="container mx-auto py-8 px-4">{renderTabContent()}</div>

      <Footer />
    </>
  );
};

export default MembersPage;