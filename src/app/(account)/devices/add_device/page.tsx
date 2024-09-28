import React from 'react';
import MultiForm from './components/MultiForm';
import BackInfo from '@/components/BackInfo';

function page() {
  return (
    <div>
      <BackInfo main={'Add a Device'} sub={'Add your device here'} />
      <MultiForm />
    </div>
  );
}

export default page;
