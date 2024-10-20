import { useState } from 'react';
import FormBuilder from '@/dynamics/FormBuilder';
import { TechnicalSpecificationForm } from '../data/TechnicalSpecification';
import { toast } from 'react-toastify';
import { validation } from '@/utils/validation';

function TechnicalSpecifications({
  setActiveTab,
  isLastStep,
  handleBack,
  setFormValues,
}) {
  const [formData, setFormData] = useState();

  const handleSubmit = () => {
    if (!validation(formData).status) {
      toast.error('Complete all form fields');
      return;
    }
    setFormValues((prev) => ({ ...prev, ...formData }));
    setActiveTab();
  };

  return (
    <div className="bg-[#FFFFFF] p-10 rounded-[20px] flex flex-col justify-between min-h-[607px]">
      <FormBuilder
        elements={TechnicalSpecificationForm()}
        formData={formData}
        setFormData={setFormData}
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

export default TechnicalSpecifications;
