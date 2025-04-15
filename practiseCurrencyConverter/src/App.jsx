import { useState } from "react";
import "./App.css";
import InputBox from "./assets/components/InputBox";
import useCurrencyInfo from "./assets/hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  return (
    <div>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div>
          <InputBox
            amount={amount}
            label="From"
            onAmountChange={(amount) => setAmount(amount)}
            currencyOptions={currencyOptions}
            onChangeCurrency={(currency) => {
              console.log(`new currency for from ${currency}`);
              setFrom(currency);
            }}
            selectedCurrency={from}
          />
          <button type="button" onClick={swap}>
            Swap
          </button>
          <InputBox
            amount={convertedAmount}
            label="To"
            changeDisabled="true"
            currencyOptions={currencyOptions}
            onChangeCurrency={(currency) => {
              console.log(`new currency for to ${currency}`);
              setTo(currency);
            }}
            selectedCurrency={to}
          />
        </div>
        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
