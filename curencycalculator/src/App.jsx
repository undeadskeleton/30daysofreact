import { useState } from "react";
import "./App.css";
import InputBox from "./assets/components/InputBox";
import useCurrencyInfo from "./assets/hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  return (
    <>
      <h1 className="text-2xl bg-yellow-500 py-5">Currency Converter</h1>
      <div>
        <div>
          <InputBox label="From" options={options} selectedCurrency={from} />
        </div>
        <div>
          <button>Swap</button>
        </div>
        <div>
          <InputBox label="To" options={options} selectedCurrency={to} />
        </div>
      </div>
      <button>
        Convert {from.toUpperCase()} to {to.toUpperCase()}{" "}
      </button>
      <div></div>
    </>
  );
}

export default App;
