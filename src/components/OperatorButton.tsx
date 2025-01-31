import React from "react";
import { Button } from "./Button";

const OperatorButton: React.FC<{
  value: string;
  onClick: (value: string) => void;
}> = ({ value, onClick }) => {
  return (
    <Button
      value={value}
      onClick={onClick}
      className="bg-yellow-500 text-white"
    />
  );
};

export default OperatorButton;
