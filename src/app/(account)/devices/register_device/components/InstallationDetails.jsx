import { useState } from "react";
import FormBuilder from "@/dynamics/FormBuilder";
import { InstallationDetailsForm } from "../data/InstallationDetails";

function MeterDetails() {
  const [formData, setFormData] = useState();

  const [loadingState, setLoadingState] = useState<boolean>(false);

  const handleSubmit = (formValues) => {
    setLoadingState(true);
    console.log("Info values:", formValues);
    setLoadingState(false);
  };

  console.log("Form data", formData);

  return (
    <div className="bg-[#FFFFFF] p-10 rounded-[20px] flex flex-col justify-between min-h-[607px]">
      <FormBuilder
        elements={InstallationDetailsForm()}
        formData={formData}
        setFormData={setFormData}
        loadingState={loadingState}
      />
      <div className="flex justify-center items-center gap-4">
        <button className="min-w-[188px] px-[16px] py-[8px] text-pri font-h-medium rounded-[8px] border border-pri">
          Back
        </button>
        <button onClick={handleSubmit} className="min-w-[188px] px-[16px] py-[8px] font-h-medium rounded-[8px] bg-pri text-[#FFFFFF]">
          Next
        </button>
      </div>
    </div>
  );
}

export default MeterDetails;
