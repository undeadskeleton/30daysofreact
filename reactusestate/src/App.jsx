// import { useState } from "react";
import "./App.css";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center flex-col items-center mt-7">
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <span>Clicked:{count} times</span>
    </div>
  );
}
