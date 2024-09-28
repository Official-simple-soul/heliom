"use client";
import { useState } from "react";
import TechnicalSpecifications from "./TechnicalSpecifications";
import MeterDetails from "./MeterInventory";
import RegulatoryCompliance from './RegulatoryCompliance'
import { useGlobalContext } from "@/store/context";

export default function MultiForm() {
  const [activeTab, setActiveTab] = useState(0);
  const { formValues } = useGlobalContext();

  const tabs = [
    "Meter Inventory Details",
    "Technical Specifications",
    "Certification and Compliance",
  ];

  const handleFormSubmission = (currentIndex) => {
    // Validate form data here
    // If valid, proceed to next tab
    if (currentIndex < tabs.length - 1) {
      setActiveTab(currentIndex + 1);
    } else {
      // Handle final submission (e.g., API call)
      console.log("All forms submitted", formValues);
    }
  };

  const handleBack = () => {
    setActiveTab(activeTab - 1);
  };

  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-row mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            disabled={index > activeTab}
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
      {activeTab === 0 && (
        <MeterDetails
          setActiveTab={() => handleFormSubmission(0)}
          isLastStep={false}
        />
      )}
      {activeTab === 1 && (
           <TechnicalSpecifications
           setActiveTab={() => handleFormSubmission(1)}
           isLastStep={true}
           handleBack={handleBack}
         />
      )}
      {activeTab === 2 && (
        <RegulatoryCompliance
          setActiveTab={() => handleFormSubmission(2)}
          isLastStep={true}
          handleBack={handleBack}
        />
      )}
    </div>
  );
}
