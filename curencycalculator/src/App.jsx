import { useState } from "react";
import "./App.css";
import InputBox from "./assets/components/InputBox";
import useCurrencyInfo from "./assets/hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  return (
    <>
      <h1 className="text-2xl bg-yellow-500 py-5">Currency Converter</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div>
            <InputBox
              label="From"
              amount={amount}
              options={options}
              selectedCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div>
            <button type="button" onClick={swap}>
              Swap
            </button>
          </div>
          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              options={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              changeDisabled
            />
          </div>
          <button type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
