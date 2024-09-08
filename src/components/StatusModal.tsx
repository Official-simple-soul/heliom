import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface StatusModalProps {
  statusText: string;
  statusDesc: string;
  btnText?: string;
  btnColor?: string;
  icon?: JSX.Element;
  onClick: () => void;
  type?: 'success' | 'error';
}

const StatusModal: React.FC<StatusModalProps> = ({
  statusText,
  statusDesc,
  btnText,
  btnColor,
  icon,
  onClick,
  type = 'success',
}) => {
  const defaultBtnText = type === 'success' ? 'Proceed to Profile' : 'Retry';
  const defaultBtnColor = type === 'success' ? 'bg-[#0F3CB1]' : 'bg-red-600';

  const defaultIcon =
    type === 'success' ? (
      <div className="bg-pri w-20 h-20 rounded-full flex items-center justify-center">
        <FaCheck color="white" size={40} />
      </div>
    ) : (
      <div className="bg-sec w-20 h-20 rounded-full flex items-center justify-center">
        <FaTimes color="white" size={40} />
      </div>
    );

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          {icon ? icon : defaultIcon}
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2 text-black">
          {statusText}
        </h2>
        <p className="text-gray-600 text-center mb-6">{statusDesc}</p>
        <button
          onClick={onClick}
          className={`w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity ${
            btnColor || defaultBtnColor
          }`}
        >
          {btnText || defaultBtnText}
        </button>
      </div>
    </div>
  );
};

export default StatusModal;
