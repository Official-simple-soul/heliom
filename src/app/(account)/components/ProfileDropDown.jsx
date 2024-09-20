// In Production
import React from 'react';
import { BiLogOut } from 'react-icons/bi';

export default function ProfileDropDown({ profileDropDown }) {


  const handleLogout = async () => {
    localStorage.clear();
    window.location.replace('/login');
  };

  return (
    <div className={`${profileDropDown ? 'block' : 'hidden'}`}>
      <div className="bg-white fixed top-24 right-8 rounded shadow z-50 border border-gray-300">
        <div className="absolute bg-white h-6 w-6 rotate-45 right-6 -top-3 border-l border-t border-gray-300"></div>
        <div className="footer p-3">
          <h1
            className="text-[red] cursor-pointer flex items-center"
            onClick={handleLogout}
          >
            <BiLogOut className="text-sm mr-3" />
            Logout
          </h1>
        </div>
      </div>
    </div>
  );
}
