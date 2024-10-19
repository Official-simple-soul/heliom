import Image from 'next/image';
import React from 'react';
import logo from '@/assets/icons/heliom-logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-white py-4 flex justify-between px-10 items-center h-[95px] drop-shadow-lg fixed left-0 right-0">
      <div className="cursor-pointer">
        <Image src={logo} alt="Heliom logo" width={100} height={29.04} />
      </div>
      <div className="flex gap-5 items-center">
        <Link
          href={'/login'}
          className="py-3 px-6 text-pri bg-[#D6DAFE] transition-all duration-200 hover:bg-[#ecedf3] text-center font-h-medium rounded-[8px] min-w-[143px]"
        >
          Login
        </Link>
        <Link
          href={'/signup'}
          className="py-3 px-6 rounded-[8px] transition-all duration-200 text-white hover:bg-[#5268e2] text-center font-h-medium bg-pri min-w-[143px]"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
