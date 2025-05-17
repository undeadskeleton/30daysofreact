import Btn from "../Btn/Btn";
import { useState } from "react";

function Nav() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>The no of time clicked {count}</h3>
      <Btn countHandle={[count, setCount]} />
    </>
  );
}

export default Nav;
