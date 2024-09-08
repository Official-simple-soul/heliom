'use client';
import React, { useState } from 'react';

const RoleSelection = ({ setPage }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole) {
      console.log(`Selected Role: ${selectedRole}`);
      setPage(2);
      // Navigate to the next step or perform the next action
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50">
      <div className="p-8 rounded-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">
          Who are you signing up as?
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Choose your preferred role
        </p>

        {/* Role Selection */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleRoleSelect('buyer')}
            className={`border-2 rounded-lg py-4 text-lg font-semibold md:w-[487px] md:h-[84px] ${
              selectedRole === 'buyer'
                ? 'border-pri bg-blue-50 text-pri'
                : 'border-gray-300 text-gray-600'
            }`}
          >
            Sign Up as a Buyer
          </button>
          <button
            onClick={() => handleRoleSelect('seller')}
            className={`border-2 rounded-lg py-4 text-lg font-semibold md:w-[487px] md:h-[84px] ${
              selectedRole === 'seller'
                ? 'border-pri bg-blue-50 text-pri'
                : 'border-gray-300 text-gray-600'
            }`}
          >
            Sign Up as a Seller
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-14">
          <button className="border-2 border-pri text-pri py-2 px-6 rounded-lg hover:bg-blue-50 md:w-[194px] md:h-[56px]">
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedRole}
            className={`py-2 px-6 rounded-lg text-white md:w-[194px] md:h-[56px] ${
              selectedRole
                ? 'bg-pri hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
