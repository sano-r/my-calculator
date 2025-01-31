import React from "react";
import { Button } from "./Button";

const FunctionButton: React.FC<{
  value: string;
  onClick: (value: string) => void;
}> = ({ value, onClick }) => {
  return (
    <Button value={value} onClick={onClick} className="bg-red-500 text-white" />
  );
};

export default FunctionButton;
