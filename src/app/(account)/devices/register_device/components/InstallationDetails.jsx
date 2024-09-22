import { useState } from 'react';
import FormBuilder from '@/dynamics/FormBuilder';
import { InstallationDetailsForm } from '../data/InstallationDetails';
import { toast } from 'react-toastify';
import { validation } from '@/utils/validation';
import { useGlobalContext } from '@/store/context';

function InstallationDetails({ setActiveTab, isLastStep, handleBack }) {
  const [formData, setFormData] = useState();
  const { setFormValues } = useGlobalContext();
  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = () => {
    if (!validation(formData).status) {
      toast.error('Complete all form fields');
      return;
    }
    setLoadingState(true);
    setFormValues((prev) => ({ ...prev, ...formData }));
    setLoadingState(false);
    // Proceed to next tab
    setActiveTab();
  };

  return (
    <div className="bg-[#FFFFFF] p-10 rounded-[20px] flex flex-col justify-between min-h-[607px]">
      <FormBuilder
        elements={InstallationDetailsForm()}
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
          {isLastStep ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default InstallationDetails;
