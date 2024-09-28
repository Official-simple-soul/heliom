import { useState } from "react";
import FormBuilder from "@/dynamics/FormBuilder";
import { RegulatoryComplianceForm } from "../data/RegulatoryComplianceForm";
import { useGlobalContext } from "@/store/context";

function RegulatoryCompliance() {
  const [formData, setFormData] = useState();
  const { setFormValues } = useGlobalContext();
  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = () => {
    setLoadingState(true);
    setFormValues((prev) => ({ ...prev, ...formData }));
    setLoadingState(false);
  };

  return (
    <div className="bg-[#FFFFFF] p-10 rounded-[20px] flex flex-col justify-between min-h-[607px]">
      <FormBuilder
        elements={RegulatoryComplianceForm()}
        formData={formData}
        setFormData={setFormData}
        loadingState={loadingState}
      />
      <div className="flex justify-center items-center gap-4">
        <button className="min-w-[188px] px-[16px] py-[8px] text-pri font-h-medium rounded-[8px] border border-pri">
          Back
        </button>
        <button  onClick={handleSubmit} className="min-w-[188px] px-[16px] py-[8px] font-h-medium rounded-[8px] bg-pri text-[#FFFFFF]">
          Submit
        </button>
      </div>
    </div>
  );
}

export default RegulatoryCompliance;
