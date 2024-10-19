import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function DropDown() {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <div className="flex space-x-3">
        <div
          className="border border-pri px-[12px] cursor-pointer py-[10px] rounded-xl flex gap-2 items-center text-pri font-h-bold text-[12px]"
          onMouseEnter={handleMouseEnter}
        >
          <span>
            <CiCalendar className="h-[18px] w-[18px]" />
          </span>
          Daily
          <span>
            <MdOutlineKeyboardArrowDown className="h-[18px] w-[18px]" />
          </span>
        </div>

        {/* Cost Div */}
        <div className="border border-pri px-[12px] cursor-pointer py-[10px] rounded-xl flex gap-2 items-center text-pri font-h-bold text-[12px]">
          Cost
          <span>
            <MdOutlineKeyboardArrowDown className="h-[18px] w-[18px]" />
          </span>
        </div>
      </div>

      {showOptions && (
        <div className="absolute top-[47px] left-0 bg-white shadow-lg border rounded-lg p-4 z-10 w-full">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              Weekly
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              Monthly
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              Yearly
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
