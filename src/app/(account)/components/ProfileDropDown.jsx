// In Production
import Image from 'next/image';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

export default function ProfileDropDown({ profileDropDown }) {
  const handleLogout = async () => {
    localStorage.clear();
    window.location.replace('/login');
  };

  const handleBuyerAccount = () => {};
  const handleOtherAccount = () => {};

  const otherAccounts = [
    {
      account_id: 1,
      account_name: 'Homeland Security',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      account_id: 2,
      account_name: 'Gate PHCN',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      account_id: 3,
      account_name: 'Abuja PHCN',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <div className={`${profileDropDown ? 'block' : 'hidden'}`}>
      <div className="bg-white fixed top-24 right-8 rounded shadow z-50 border border-gray-300">
        <div className="absolute bg-white h-6 w-6 rotate-45 right-6 -top-3 border-l border-t border-gray-300"></div>
        <div className="footer py-3">
          <div className="">
            <div className="flex items-center space-x-4 hover:bg-gray-200 py-3 px-5">
              <Image
                src={'https://i.pravatar.cc/150?img=4'}
                width={30}
                height={30}
                alt="user"
                className="rounded-full"
              />
              <p className="text-gray-800 font-h-normal text-sm">
                Favour Sunday
              </p>
            </div>
            {otherAccounts.map((account) => (
              <div
                key={account.account_id}
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-200 py-3 px-5"
                onClick={handleOtherAccount}
              >
                <Image
                  src={account.avatar}
                  width={30}
                  height={30}
                  alt="user"
                  className="rounded-full"
                />
                <p className="text-gray-800 font-h-normal text-sm">
                  {account.account_name}
                </p>
              </div>
            ))}
            <div
              className="flex items-center space-x-4 text-red-600 hover:bg-gray-200 py-3 px-5"
              onClick={handleLogout}
            >
              <AiOutlineLogout className="text-3xl" />
              <p className="text-sm font-h-normal">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
