import { Context } from "../component/Component";
import { useState } from "react";

export default function Btn() {
  const [color, setColor] = useState(true);

  const changeColor = () => {
    setColor((prev) => !prev);
  };

  return (
    <div className="py-0 px-auto">
      <button
        type="button"
        onClick={changeColor}
        className={` ${color ? "bg-blue-500" : "bg-white-500"}`}
      >
        Click me
      </button>
    </div>
  );
}
