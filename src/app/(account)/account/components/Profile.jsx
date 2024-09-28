import React, { useState } from 'react';
import BackInfo from '@/components/BackInfo';
import UserProfile from './UserProfile';

function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  const render = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />;
      case 'installer':
        return <div>Installer Info</div>; // Replace with your Installer component or content
      case 'password':
        return <div>Change Password</div>; // Replace with your Password component or content
      case 'setting':
        return <div>Account Settings</div>; // Replace with your Settings component or content
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="">
      <BackInfo back={false} main={'Account'} sub={'Make changes to your account here'} />
      <div className="flex flex-wrap items-center space-x-2 md:space-x-10 mb-4">
        <button
          className={`${
            activeTab === 'profile'
              ? 'border border-pri text-pri bg-[#eef0fe]'
              : ''
          } text-xs md:text-sm font-h-medium px-2 py-1 md:px-8 md:py-1 rounded transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`${
            activeTab === 'installer'
              ? 'border border-pri text-pri bg-[#eef0fe]'
              : ''
          } text-xs md:text-sm font-h-medium px-2 py-1 md:px-8 md:py-1 rounded transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab('installer')}
        >
          Installers
        </button>
        <button
          className={`${
            activeTab === 'password'
              ? 'border border-pri text-pri bg-[#eef0fe]'
              : ''
          } text-xs md:text-sm font-h-medium px-2 py-1 md:px-8 md:py-1 rounded transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab('password')}
        >
          Passwords
        </button>
        <button
          className={`${
            activeTab === 'setting'
              ? 'border border-pri text-pri bg-[#eef0fe]'
              : ''
          } text-xs md:text-sm font-h-medium px-2 py-1 md:px-8 md:py-1 rounded transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab('setting')}
        >
          Settings
        </button>
      </div>
      <div className="max-w-full mx-auto bg-white shadow-md rounded-lg p-4 md:p-6">
        {render()}
      </div>
    </div>
  );
}

export default Profile;
