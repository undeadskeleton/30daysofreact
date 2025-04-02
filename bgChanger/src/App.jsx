import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2 text-amber-950">
        <div className="flex flex-wrap justify-center gap-5 shadow-2xl bg-white px-10 py-5 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full text-white shadow-amber-50"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full text-white shadow-amber-50"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full text-white shadow-amber-50"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full text-white shadow-amber-50"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("aqua")}
            className="outline-none px-4 rounded-full text-white shadow-amber-50"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
