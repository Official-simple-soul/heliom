import Image from "next/image";
import React from "react";

export default function Top({ onOpen }) {
  return (
    <main className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
      <div className="flex flex-col gap-3">
        <h1 className="font-heavy text-[28px] leading-9">Subcriptions</h1>
        <p className="font-[400] text-[16px] leading-6 text-[#B9B8B8]">
          View and manage your subscriptions here
        </p>
      </div>
      <div className="lg:ml-auto flex justify-center lg:justify-end">
        <button
          onClick={onOpen}
          className="bg-pri cursor-pointer text-white py-[8px] px-[16px] inline-flex font-medium rounded-[8px] items-center gap-2"
        >
          <Image src={"icon.png"} alt="wallet image" width={24} height={24} />
          Purchase Token
        </button>
      </div>
    </main>
  );
}
