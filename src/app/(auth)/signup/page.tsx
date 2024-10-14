'use client';
import React from 'react';
import SignUp from './components/SignUp';

const Page: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      <SignUp />
    </div>
  );
};

export default Page;
