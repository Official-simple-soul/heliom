import { useState } from "react";
import FormBuilder from "@/dynamics/FormBuilder";
import { purchaseTokenForm } from "../../data/purchaseTokenForm";
import { useGlobalContext } from "@/store/context";
import { toast } from "react-toastify";
import { validation } from "@/utils/validation";

function PurchaseToken({ onClose }) {
  const [formData, setFormData] = useState();
  const { setFormValues } = useGlobalContext();
  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = () => {
    if (!validation(formData).status) {
      toast.error("Complete all form fields");
      return;
    }
    setLoadingState(true);
    setFormValues((prev) => ({ ...prev, ...formData }));
    setLoadingState(false);
  };

  return (
    <div className="bg-[#FFFFFF] p-10 rounded-[20px] flex flex-col justify-between min-h-[607px]">
      <div className="border-b border-[#E1E4E5] pb-4 mb-0">
        <h1>Purchase Token</h1>
      </div>
      <FormBuilder
        elements={purchaseTokenForm()}
        formData={formData}
        setFormData={setFormData}
        loadingState={loadingState}
      />
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={onClose}
          className="min-w-[188px] px-[16px] py-[8px] text-pri font-h-medium rounded-[8px] border border-pri"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="min-w-[188px] px-[16px] py-[8px] font-h-medium rounded-[8px] bg-pri text-[#FFFFFF]"
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default PurchaseToken;
