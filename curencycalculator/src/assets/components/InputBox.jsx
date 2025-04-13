import { useState, useEffect, useId } from "react";
import "./InputBox.css";

function InputBox({ label, options, selectedCurrency, onAmountChange }) {
  const currId = useId();

  return (
    <div className="flex justify-center gap-10 border-2 ">
      <div className="flex flex-col">
        <label htmlFor="">{label}</label>
        <input
          className="outline-none w-full"
          type="number"
          onChange={(e) => onAmountChange(e.target.value)}
        />
        {console.log(onAmountChange)}
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Currency</label>
        <select name="" id="" value={selectedCurrency}>
          {options.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
