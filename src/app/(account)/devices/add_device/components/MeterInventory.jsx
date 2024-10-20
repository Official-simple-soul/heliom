import { useState } from 'react';
import FormBuilder from '@/dynamics/FormBuilder';
import { MeterInventoryForm } from '../data/MeterInventory';
import { toast } from 'react-toastify';
import { validation } from '@/utils/validation';
import Link from 'next/link';

function MeterInventory({ setActiveTab, isLastStep, setFormValues }) {
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
        elements={MeterInventoryForm()}
        formData={formData}
        setFormData={setFormData}
      />
      <div className="flex justify-center items-center gap-4">
        <Link href={'/devices'}>
          <button
            onClick={() => setActiveTab()}
            className="min-w-[188px] px-[16px] py-[8px] text-pri font-h-medium rounded-[8px] border border-pri"
          >
            Back
          </button>
        </Link>
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

export default MeterInventory;
