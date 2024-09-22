import React from "react";
import { useState } from "react";
import FormBuilder from "@/dynamics/FormBuilder";
import { AccountInfoForm } from "../data/AccountInfo";
import { useGlobalContext } from "@/store/context";
import { validation } from "@/utils/validation";
import { toast } from "react-toastify";

export default function AccountInfo({ setActiveTab, isLastStep, handleBack }) {
  const [formData, setFormData] = useState();
  const { setFormValues } = useGlobalContext();

  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = () => {
    if (!validation(formData).status) {
      toast.error("Complete all form fields");
      return;
    }

    console.log("Info values:", formData);
    setFormValues((prev) => ({ ...prev, ...formData }));
    setLoadingState(false);
    // Proceed to next tab
    setActiveTab();
  };

  console.log("Form data", formData);
  return (
    <div className="bg-[#FFFFFF] p-10 rounded-[20px] flex flex-col justify-between min-h-[607px]">
      <FormBuilder
        elements={AccountInfoForm()}
        formData={formData}
        setFormData={setFormData}
        loadingState={loadingState}
      />
      <div className="flex justify-center items-center gap-4">
        {!isLastStep && (
          <button
            onClick={handleBack}
            className="min-w-[188px] px-[16px] py-[8px] text-pri font-h-medium rounded-[8px] border border-pri"
          >
            Back
          </button>
        )}
        <button
          onClick={handleSubmit}
          className="min-w-[188px] px-[16px] py-[8px] font-h-medium rounded-[8px] bg-pri text-[#FFFFFF]"
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
