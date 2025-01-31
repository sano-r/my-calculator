import React, { useState } from "react";
import { Button } from "./Button";

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        console.log(`計算エラー: ${error}`);
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("0");
    } else {
      setDisplay(display === "0" && value !== "." ? value : display + value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="text-right text-2xl font-bold mb-4">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button
          value="/"
          onClick={handleButtonClick}
          className="bg-yellow-500 text-white"
        />

        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button
          value="*"
          onClick={handleButtonClick}
          className="bg-yellow-500 text-white"
        />

        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button
          value="-"
          onClick={handleButtonClick}
          className="bg-yellow-500 text-white"
        />

        <Button value="0" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button
          value="C"
          onClick={handleButtonClick}
          className="bg-red-500 text-white"
        />
        <Button
          value="+"
          onClick={handleButtonClick}
          className="bg-yellow-500 text-white"
        />

        <Button
          value="="
          onClick={handleButtonClick}
          className="bg-green-500 text-white col-span-4"
        />
      </div>
    </div>
  );
};
