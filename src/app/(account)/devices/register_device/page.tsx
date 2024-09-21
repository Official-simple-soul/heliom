import React from 'react';
import GoBack from '@/components/GoBack';
import MultiForm from './components/MultiForm';

function page() {
  return (
    <div>
      <GoBack />
      <div className="space-y- mb-10">
        <p className='font-h-medium text-[28px]'>Register a Device</p>
        <p className='text-sm text-gray-500'>Register your device here</p>
      </div>
      <MultiForm />
    </div>
  );
}

export default page;
