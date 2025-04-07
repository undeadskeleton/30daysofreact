import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";

let callIndex = -1;
const stateValues = [];

const useState = (initialValue) => {
  callIndex++;

  const currentCallIndex = Number(callIndex);

  if (stateValues[currentCallIndex] === undefined) {
    stateValues[currentCallIndex] = initialValue;
  }

  const setValue = (newValue) => {
    stateValues[currentCallIndex] = newValue;
    renderApp();
    console.log("Newvalue", newValue);
  };

  return [stateValues[currentCallIndex], setValue];
};

const App = () => {
  const [countA, setCountA] = useState(34);
  const [countB, setCountB] = useState(-1);

  return (
    <div className="flex items-center border py-3 px-3 justify-center">
      <div className="mx-4">
        <h1>Count A:{countA}</h1>
        <button
          className="mx-2"
          type="button"
          onClick={() => setCountA(countA - 1)}
        >
          Substract
        </button>
        <button
          className="mx-2"
          type="button"
          onClick={() => setCountA(countA + 1)}
        >
          Add
        </button>
      </div>

      <div>
        <h1>Count B:{countB}</h1>
        <button
          className="mx-2"
          type="button"
          onClick={() => setCountB(countB - 1)}
        >
          Substract
        </button>
        <button
          className="mx-2"
          type="button"
          onClick={() => setCountB(countB + 1)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const renderApp = () => {
  callIndex = -1;
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

renderApp();
