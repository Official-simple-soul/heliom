"use client";

import { useState } from "react";
import TechnicalSpecifications from "./TechnicalSpecifications";
import MeterDetails from "./MeterDetails";
import RegulatoryCompliance from "./RegulatoryCompliance";

export default function MultiForm() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Meter Details",
    "Installation Details",
    "Technical Specifications",
    "Regulatory and Compliance Information",
  ];

  const FormComponent = () => {
    switch (activeTab) {
      case 0:
        return <MeterDetails />;
      case 1:
        return <InstallationDetails />;
      case 2:
        return <TechnicalSpecifications />;
      case 3:
        return <RegulatoryCompliance />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-row mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`min-w-[198px] h-[44px] flex justify-center items-center px-[10px] mx-2 rounded-lg text-center leading-5  ${
              activeTab === index
                ? "bg-[#EEF0FE] text-pri font-h-medium border border-pri"
                : "bg-[#E0E0E01A] font-h-light text-[#8D8E96]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <div>{FormComponent()}</div>
    </div>
  );
}
