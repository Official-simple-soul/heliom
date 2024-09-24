'use client';
import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection';
import SignUp from './components/SignUp';
import { useGlobalContext } from '@/store/context';

const Page: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const {setUserProfile} = useGlobalContext()



const onSubmit = async (formData: object) => {
  console.log('.. Role ..', selectedRole, formData)
  setUserProfile({...formData, user: selectedRole})
}

  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      {page === 1 ? (
        <RoleSelection setPage={setPage} setSelectedRole={setSelectedRole} selectedRole={selectedRole}/>
      ) : (
        <SignUp setPage={setPage} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default Page;
