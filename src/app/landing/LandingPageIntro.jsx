import React from 'react';
import bgIm from '@/assets/images/auth-frame .svg';
import Image from 'next/image';
import Desktop from '@/assets/images/Desktop.png';

export default function LandingPageIntro() {
  return (
    <div
      className="min-h-screen bg-[#0F3CB10D] bg-opacity-0 bg-cover bg-no-repeat px-10"
      style={{
        backgroundImage: `url(${bgIm.src})`,
      }}
    >
      <div className="flex flex-col items-center gap-6 px-10  pt-20">
        <div className="text-center flex flex-col gap-5 mt-10">
          <h2 className="font-bold text-[#D60000] text-[20px] leading-[19.9px]">
            Heliom
          </h2>
          <h1 className="text-pri font-h-bold text-[48px] leading-[47.76px]">
            Monitor. Manage. Maximize.
          </h1>
          <p className="font-[400] leading-[28.63px] text-[24px] text-[#8D8E96] w-[630px]">
            Take control with our advanced power monitoring and management
            system.
          </p>
        </div>
        <div className="">
          <Image src={Desktop} alt="dashboard image" />
        </div>
      </div>
    </div>
  );
}
