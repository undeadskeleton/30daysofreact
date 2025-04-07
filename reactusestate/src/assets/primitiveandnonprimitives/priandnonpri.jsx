import { useState } from "react";

export default function Prices() {
  console.log("Components Rendering....");
  const [price, setPrice] = useState({
    number: 10,
    totalPrice: true,
  });

  const handleClick = () => {
    setPrice({
      number: 100,
      totalPrice: true,
    });
  };
  return (
    <div className="flex justify-center pt-10">
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-500 py-2 px-4 rounded text-white"
      >
        Click me
      </button>
      <p></p>
    </div>
  );
}
//in javascript two object ==== object are not same as even using object in js we are use a reference to an object so dont use object dependencies in useEffect rather use the key inside the object if object is used useEffect will run on every render as the previous object is not same as the current object even though they look same
