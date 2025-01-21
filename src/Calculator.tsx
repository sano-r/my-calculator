import { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

export function Calculator(){
    const [displayValue, setDisplayValue] = useState<string>('0');

    const handleButtonClick = (label: string) =>{
        if(/\d/.test(label)){
            setDisplayValue(prev => prev === '0' ? label : prev + label);
        }
    }
    return(
        <>
            <Display value={displayValue}/>
            <div className="button-grid">
                <Button onClick={() => handleButtonClick('1')} label='1' />
                <Button onClick={() => handleButtonClick('2')} label='2' />
                <Button onClick={() => handleButtonClick('3')} label='3' />
                <Button onClick={() => handleButtonClick('4')} label='4' />
                <Button onClick={() => handleButtonClick('5')} label='5' />
                <Button onClick={() => handleButtonClick('6')} label='6' />
                <Button onClick={() => handleButtonClick('7')} label='7' />
                <Button onClick={() => handleButtonClick('8')} label='8' />
                <Button onClick={() => handleButtonClick('9')} label='9' />
            </div>

        </>
    );
}