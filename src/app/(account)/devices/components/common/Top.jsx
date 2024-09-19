'use client';
import React from 'react';
import Button from '@/components/Button'; // Adjust the import to your Button path
import { FaPlus } from 'react-icons/fa';

function Top() {
  const handleRegisterDeviceClick = () => {
    // Define what happens when the button is clicked
    console.log('Register device button clicked');
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-1">My Devices</h1>
          <p className="text-gray-500 text-sm">
            View and manage your devices here
          </p>
        </div>
        <Button
          onClick={() => handleRegisterDeviceClick()}
          icon={<FaPlus />}
          text="Register Device"
          styles="hover:bg-blue-700"
        />
      </div>
    </div>
  );
}

export default Top;
