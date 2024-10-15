'use client';
import React from 'react';
import Button from '@/components/Button';
import { FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

function Top({ activeTab, setActiveTab }) {
  const navigate = useRouter();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className="mb-4 space-y-10">
      <div className="md:flex space-y-4 md:space-y-0 justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-1">My Devices</h1>
          <p className="text-gray-500 text-sm">
            View and manage your devices here
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {currentUser?.type === 'seller' && (
            <Button
              onClick={() => navigate.push('/devices/add_device')}
              icon={<FaPlus />}
              text="Add Device"
              styles="hover:bg-blue-700 px-2 md:px-10"
            />
          )}
          <Button
            onClick={() => navigate.push('/devices/register_device')}
            icon={<FaPlus />}
            text="Register Device"
            buttonColor="white"
            textColor="#0F3CB1"
            styles="hover:bg-blue-700 px-2 md:px-10"
          />
        </div>
      </div>
      {currentUser?.type === 'seller' && (
        <div className="flex items-center">
          <button
            className={`${
              activeTab === 'added'
                ? 'border border-pri text-pri bg-[#eef0fe]'
                : ''
            } text-sm font-h-medium px-4 py-1 rounded`}
            onClick={() => setActiveTab('added')}
          >
            Added Devices
          </button>
          <button
            className={`${
              activeTab === 'registered'
                ? 'border border-pri text-pri bg-[#eef0fe]'
                : ''
            } text-sm font-h-medium px-4 py-1 rounded`}
            onClick={() => setActiveTab('registered')}
          >
            Registered Devices
          </button>
        </div>
      )}
    </div>
  );
}

export default Top;
