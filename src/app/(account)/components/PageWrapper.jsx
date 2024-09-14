// In Production
import React, { useEffect, useState } from 'react';
import Notifications from './Notification';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '@/store/context';
import AvatarWidget from '@/components/AvatarWidget';
import ProfileDropdown from './ProfileDropDown';
import Sidebar from './Sidebar';
import Image from 'next/image';
import { ThemeColor } from '@/constant/themeColor';
import heliom_logo from '@/assets/icons/heliom-logo.svg';

const PageWrapper = ({ children, sideItem, route }) => {
  const [showSide, setShowSide] = useState(false);
  const [notification] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const { userProfile } = useGlobalContext();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const { mainBgColor, trans, bgColor } = ThemeColor();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (userProfile?.profile?.avatar) {
      setAvatarUrl(`${userProfile.profile?.avatar}?cache=${Date.now()}`);
    }
  }, [userProfile]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="flex items-stretch mt-0">
        <div>
          <div id="sidebar">
            <div
              className={`${
                showSide ? 'block' : 'hidden'
              } fixed top-0 right-0 left-0 bottom-0 bg-black opacity-80 z-20`}
            ></div>
            <Sidebar
              showSide={showSide}
              setShowSide={setShowSide}
              sideItem={sideItem}
              route={route}
            />
          </div>
        </div>
        <div className="main-content w-full h-full ">
          <nav
            className={`h-[72px] shadow-md  flex items-center justify-between px-5 fixed w-full z-50 md:z-30 md:pl-60 ${trans}`}
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex items-center space-x-4">
              {showSide ? (
                <FaTimes
                  className="md:hidden z-40 text-3xl font-light cursor-pointer"
                  onClick={() => setShowSide(!showSide)}
                />
              ) : (
                <FaBars
                  className="md:hidden z-40 text-3xl font-light cursor-pointer"
                  onClick={() => setShowSide(!showSide)}
                />
              )}
              <Image
                src={heliom_logo}
                height={29}
                width={100}
                alt="img"
                className="md:hidden"
              />

              <div className="hidden md:flex w-[400px] h-10 rounded-lg space-x-1 md:justify-start bg-transparent border border-gray-300 px-3 items-center">
                <FaSearch className="text-gray-300 text-[12px] md:text-lg" />
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Search"
                  className={`placeholder-gray-200 focus:outline-none text-[12px] md:text-md bg-transparent w-full`}
                />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div
                className="relative bg-transparent border border-gray-300 py-1 w-[88px] rounded-[24px] flex items-center gap-2 px-3 cursor-pointer"
                onClick={() => setProfileDropDown(!profileDropDown)}
              >
                <AvatarWidget
                  avatarUrl={avatarUrl}
                  w={'26px'}
                  h={'26px'}
                  text={'10px'}
                  owner={userProfile?.profile}
                />
                <Image
                  src={'/icons/arrow-down.svg'}
                  alt=""
                  width={20}
                  height={20}
                  className="w-[12px] absolute top-[40%] right-3"
                />
              </div>
            </div>
          </nav>

          <div
            className={`md:ml-6 p-6 pt-20 md:pl-60 min-h-[200vh] ${trans}`}
            style={{ backgroundColor: mainBgColor }}
          >
            {children}
          </div>
        </div>
      </div>
      <Notifications notification={notification} />
      <ProfileDropdown profileDropDown={profileDropDown} route={route} />
    </>
  );
};

export default PageWrapper;
