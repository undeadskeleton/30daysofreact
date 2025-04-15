import { useState } from "react";
import "./App.css";
import InputBox from "./assets/components/InputBox";
import useCurrencyInfo from "./assets/hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

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
              options={options}
              amount={amount}
              selectedCurrency={from}
              onAmountChange={(amount) => {
                return setAmount(amount);
              }}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div>
            <button onClick={swap}>Swap</button>
          </div>
          <div>
            <InputBox
              label="To"
              options={options}
              selectedCurrency={to}
              amount={convertedAmount}
              changeDisabled
              onCurrencyChange={(currency) => setTo(currency)}
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
