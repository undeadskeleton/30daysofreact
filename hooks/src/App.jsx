import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(6);

  const addValue = () => {
    counter++;
    if (counter > 18) counter = 20;
    setCounter(counter);
    console.log(counter);
  };

  const removeValue = () => {
    counter--;
    if (counter < 2) counter = 0;

    setCounter(counter);
    console.log(counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value:{counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
