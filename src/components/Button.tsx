import React from 'react';

interface ButtonProps {
  onClick: () => void;
  buttonColor?: string;
  textColor?: string;
  icon: React.ReactNode;
  text: string;
  styles: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  buttonColor = '#0F3CB1',
  textColor = '#ffffff',
  icon,
  text,
  styles,
}) => {
  return (
    <button
      className={`${styles} px-10 py-2 text-sm rounded-lg flex items-center space-x-2 border`}
      style={{
        backgroundColor: buttonColor,
        color: textColor,
        borderColor: textColor,
      }}
      onClick={onClick}
    >
      {icon} <span>{text}</span>
    </button>
  );
};

export default Button;
