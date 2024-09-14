// In Production
import React from 'react';
import { useGlobalContext } from '@/store/context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeColor } from '@/constant/themeColor';
import Image from 'next/image';
import heliom_logo from '@/assets/icons/heliom-logo.svg';

const Sidebar = ({ showSide, setShowSide, sideItem }) => {
  const handleNavSide = () => setShowSide(false);
  const {} = useGlobalContext();
  const pathname = usePathname();
  const { bgColor, trans, textColor } = ThemeColor();

  const permissions = ['', ''];
  return (
    <>
      <div
        className={`${
          showSide
            ? 'fixed left-0 h-screen'
            : 'h-screen absolute -left-[200%] md:left-0'
        } overflow-hidden w-[206px] md:w-[236px] transition-all ease-in-out duration-500 top-16 md:top-0 bottom-0 z-40 md:fixed`}
      >
        <div
          className={`shadow-lg h-full flex flex-col overflow-auto ${trans}`}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <div className="items-center gap-4 h-[72px] justify-center hidden md:flex">
            <Image
              src={heliom_logo}
              height={29}
              width={100}
              alt="img"
              className=""
            />
          </div>

          <nav className="mt-5">
            <div className="relative">
              {sideItem?.map((side_item, index) => {
                const href = side_item.link;
                const isActive = pathname === href;

                return (
                  (side_item.authorizedUsers?.includes('all') ||
                    permissions?.some((permission) =>
                      side_item.authorizedUsers.includes(permission)
                    )) && (
                    <Link
                      key={index}
                      href={href}
                      onClick={handleNavSide}
                      className={`w-full font-h-light flex items-center gap-3 px-6 py-3 my-2 transition-colors duration-200 justify-start ${
                        isActive
                          ? `text-pri bg-[#0d6efd08] border-l-4 border-pri`
                          : 'text-[#808080] hover:text-pri hover:bg-[#0d6efd08] hover:font-semibold hover:border-l-4 hover:border-pri'
                      }`}
                    >
                      <span className="text-left">{side_item.logo}</span>
                      <span className="text-sm md:text-lg">
                        {side_item.name}
                      </span>
                    </Link>
                  )
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
