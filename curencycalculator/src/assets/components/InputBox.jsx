import { useState, useEffect, useId } from "react";
import "./InputBox.css";

function InputBox({
  label,
  options,
  onAmountChange,
  changeDisabled = false,
  amount,
  onCurrencyChange,
}) {
  const currId = useId();
  const [selectedCurrency, setSelectedCurrency] = useState("inr");

  return (
    <div className="flex justify-center gap-10 border-2 ">
      <div className="flex flex-col">
        <label htmlFor="">{label}</label>
        <input
          className="outline-none w-full"
          type="number"
          onChange={(e) => onAmountChange(Number(e.target.value))}
          value={amount}
          disabled={changeDisabled}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Currency</label>
        <select
          name=""
          id=""
          value={selectedCurrency}
          onChange={(e) => {
            console.log("The currency is :", onCurrencyChange(e.target.value));
            return onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
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
