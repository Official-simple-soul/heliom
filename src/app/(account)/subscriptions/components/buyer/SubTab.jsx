"use client";
import { useState } from "react";
import Subcriptions from "./Subcriptions";
import Transactions from "./Transactions";

export default function SubTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Subscriptions", "Transactions"];

  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-row mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`min-w-[198px] h-[44px] flex justify-center items-center px-[10px] mx-2 rounded-lg text-center leading-5  ${
              activeTab === index
                ? "bg-[#EEF0FE] text-pri font-h-medium border border-pri"
                : "bg-[#E0E0E01A] font-h-light text-[#8D8E96]"
            }`}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === 0 && <Subcriptions />}
      {activeTab === 1 && <Transactions />}
    </div>
  );
}
