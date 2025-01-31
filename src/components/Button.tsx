import React from "react";

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  className,
}) => {
  return (
    <button
      className={`rounded-lg p-2 font-bold ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};
