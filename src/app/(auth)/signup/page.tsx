'use client';
import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection';
import SignUp from './components/SignUp';

const Page: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      {page === 1 ? (
        <RoleSelection setPage={setPage} />
      ) : (
        <SignUp setPage={setPage} />
      )}
    </div>
  );
};

export default Page;
