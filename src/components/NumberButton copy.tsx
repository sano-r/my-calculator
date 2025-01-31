import React from "react";
import { Button } from "./Button";

export const NumberButton: React.FC<{
  value: string;
  onClick: (value: string) => void;
}> = ({ value, onClick }) => {
  return <Button value={value} onClick={onClick} className="bg-gray-300" />;
};
