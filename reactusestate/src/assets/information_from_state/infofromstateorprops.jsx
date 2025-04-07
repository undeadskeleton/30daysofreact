import { useState, useRef } from "react";

const PRICE_PER_ITEM = 1.5;

export default function Cart() {
  const runTime = useRef(0);
  runTime.current++;
  const [quantity, setQuantity] = useState(1);
  //   const [totalPrice, setTotalPrice] = useState(0);
  const totalPrice = quantity * PRICE_PER_ITEM;

  const handleClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex justify-center pt-10 flex-col items-center">
      <button type="button" onClick={handleClick}>
        Add {quantity} item
      </button>
      <p>Total price : {totalPrice}</p>
      <p>No of time the compent is render : {runTime.current}</p>
    </div>
  );
}
