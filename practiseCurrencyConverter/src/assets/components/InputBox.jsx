import { useState, useEffect, useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onChangeCurrency,
  changeDisabled = false,
  currencyOptions,
  selectedCurrency = "inr",
}) {
  return (
    <div className="border-3 flex gap-10">
      <div className="flex flex-col">
        <label htmlFor={label}>{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={changeDisabled}
        />
      </div>
      <div className="">
        <p>Currency</p>
        <select
          value={selectedCurrency}
          onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
