import { useState } from 'react';
import FormBuilder from '@/dynamics/FormBuilder';
import { MeterDetailsForm } from '../data/MeterDetails';
import { useGlobalContext } from '@/store/context';
import { toast } from 'react-toastify';
import { validation } from '@/utils/validation';

function MeterDetails() {
  const [formData, setFormData] = useState();
  const {setFormValues } = useGlobalContext();

  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = (formValues) => {

    if (validation(formData).status) {
      toast.error('Complete all form fields');
      return;
    }

    console.log('Info values:', formValues);
    setFormValues((prev) => ({ ...prev, ...formValues }));
    setLoadingState(false);
  };

  console.log('Form data', formData);

  return (
    <div className="bg-[#FFFFFF] p-10 rounded-[20px] flex flex-col justify-between min-h-[607px]">
        <FormBuilder
          elements={MeterDetailsForm()}
          formData={formData}
          setFormData={setFormData}
          loadingState={loadingState}
        />
        <div className="flex justify-center items-center gap-4">
          <button className="min-w-[188px] px-[16px] py-[8px] text-pri font-h-medium rounded-[8px] border border-pri">
            Back
          </button>
          <button
           onClick={handleSubmit}
            className="min-w-[188px] px-[16px] py-[8px] font-h-medium rounded-[8px] bg-pri text-[#FFFFFF]"
          >
            Next
          </button>
        </div>
    </div>
  );
}

export default MeterDetails;