import Image from 'next/image';
import React from 'react';
import logo from '@/assets/icons/heliom-logo.svg';

export default function Header() {
  return (
    <div className="bg-white p-4 flex justify-between">
      <Image src={logo} alt="Heliom" width={100} height={29.04} />
      <div>
        <button className="bg-[#D6DAFE] font-h-medium rounded-lg p-4">
          Login
        </button>
        <button className="bg-pri font-h-medium text-white rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}
