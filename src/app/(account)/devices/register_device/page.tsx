import React from 'react';
import MultiForm from './components/MultiForm';
import BackInfo from '@/components/BackInfo';

function page() {
  return (
    <div>
      <BackInfo main={'Register a Device'} sub={'Register your device here'} />
      <MultiForm />
    </div>
  );
}

export default page;
