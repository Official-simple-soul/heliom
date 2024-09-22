import React from 'react';
import GoBack from '@/components/GoBack';

function BackInfo({ back=true, main, sub }) {
  return (
    <div>
      {
        back && <GoBack />
      }
      <div className="space-y- mb-10">
        <p className="font-h-medium text-[28px]">{main}</p>
        <p className="text-sm text-gray-500">{sub}</p>
      </div>
    </div>
  );
}

export default BackInfo;
