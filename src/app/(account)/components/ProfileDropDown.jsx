// In Production
import Image from 'next/image';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setCurrentUser } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import { setOpenCreateAccountModal } from '@/store/slices/generalSlice';
import { IoAddCircleOutline } from 'react-icons/io5';
import AvatarWidget from '@/components/AvatarWidget';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

export default function ProfileDropDown({
  profileDropDown,
  setProfileDropDown,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { accountProfile, currentUser } = useSelector((state) => state.auth);
  const { sellers, buyers } = useSelector((state) => state.user);

  const handleLogout = async () => {
    dispatch(logout());
    router.replace('/login');
  };

  const handleBuyerAccount = () => {
    try {
      dispatch(setCurrentUser({ type: 'buyer', account }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSellerAccount = (account) => {
    try {
      dispatch(setCurrentUser({ type: 'seller', account }));
    } catch (err) {
      console.log(err);
    }
  };
  const handleAccount = () => {
    try {
      dispatch(setCurrentUser({ type: 'general' }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${profileDropDown ? 'block' : 'hidden'}`}>
      <div className="bg-white fixed top-24 right-8 rounded shadow z-50 border border-gray-300">
        <div className="absolute bg-white h-6 w-6 rotate-45 right-6 -top-3 border-l border-t border-gray-300"></div>
        <div className="footer py-3">
          <div className="">
            <div
              onClick={handleAccount}
              className="flex items-center space-x-4 hover:bg-gray-200 py-3 px-5 cursor-pointer"
            >
              <Image
                src={'https://i.pravatar.cc/150?img=4'}
                width={30}
                height={30}
                alt="user"
                className="rounded-full"
              />
              <p className="text-gray-800 font-h-normal text-sm">
                {accountProfile?.account?.email ?? 'test@example.com'}
              </p>
              {currentUser?.type === 'general' && (
                <IoIosCheckmarkCircleOutline className="text-green-400" />
              )}
            </div>
            {sellers && (
              <div className="border">
                <div className="py-1 px-5">
                  <p className="text-black text-xs">Seller Accounts</p>
                </div>
                {sellers?.map((account) => (
                  <div
                    key={account.id}
                    className={`flex items-center space-x-4 cursor-pointer hover:bg-gray-200 py-3 px-5`}
                    onClick={() => handleSellerAccount(account)}
                  >
                    <AvatarWidget
                      avatarUrl={account.avatar}
                      owner={account.company_name}
                      h={30}
                      w={30}
                    />
                    <p className="text-gray-800 font-h-normal text-sm max-w-40 truncate">
                      {account.company_name}
                    </p>
                    {currentUser?.type === 'seller' &&
                      currentUser?.account?.id === account.id && (
                        <IoIosCheckmarkCircleOutline className="text-green-400" />
                      )}
                  </div>
                ))}
              </div>
            )}
            {buyers && (
              <div className="border-b">
                <div className="py-1 px-5">
                  <p className="text-black text-xs">Buyer Accounts</p>
                </div>
                {buyers?.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center space-x-4 cursor-pointer hover:bg-gray-200 py-3 px-5"
                    onClick={() => handleBuyerAccount(account)}
                  >
                    <Image
                      src={account.avatar}
                      width={30}
                      height={30}
                      alt="user"
                      className="rounded-full"
                    />
                    <p className="text-gray-800 font-h-normal text-sm">
                      {account.company_name}
                    </p>
                    {currentUser?.type === 'seller' &&
                      currentUser?.account?.id === account.id && (
                        <IoIosCheckmarkCircleOutline className="text-green-400" />
                      )}
                  </div>
                ))}
              </div>
            )}
            <div
              className="flex items-center space-x-4 text-black hover:bg-gray-200 py-2 px-5 cursor-pointer"
              onClick={() => {
                dispatch(setOpenCreateAccountModal(true)),
                  setProfileDropDown(false);
              }}
            >
              <IoAddCircleOutline className="text-3xl" />
              <p className="text-sm font-h-normal">Add account</p>
            </div>
            <div
              className="flex items-center space-x-4 text-red-600 hover:bg-gray-200 py-2 px-5 cursor-pointer"
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
