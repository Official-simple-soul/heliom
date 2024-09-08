// In Production
'use client';
import Image from 'next/image';
import React from 'react';
import pol from '@/assets/images/auth-frame .svg';
import heliom_logo from '@/assets/icons/heliom-logo.svg';
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      <div className="h-[95px] w-full shadow-md drop-shadow-md sticky top-0 bg-white z-50">
        <div className="w-[90%] items-center flex h-full mx-auto">
          <Image
            src={heliom_logo}
            height={29}
            width={100}
            alt="img"
            className=""
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 w-full flex-1">
        <div className=" bg-white h-full">{children}</div>
        <div className="h-full relative hidden md:block">
          <Image src={pol} fill alt="img" className="" />
        </div>
      </div>
    </div>
  );
}

export default layout;
