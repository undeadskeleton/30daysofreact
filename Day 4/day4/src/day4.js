import { useState } from "react";
import { useEffect, useRef } from "react";
const user = {
  name: "Undead Skeleton",
  imageUrl:
    "https://images.pexels.com/photos/4519471/pexels-photo-4519471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((product) => {
  console.log("Key:", product.id);
  return <li key={product.id}>{product.title}</li>;
});

// function Mybutton() {
//   function handleClick() {
//     alert("You clicked me!");
//   }

//   return <button onClick={handleClick}>Click me!</button>;
// }

export default function Profile() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Counted That update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

// export default function MyApp() {
//     const [count, setCount] = useState(0);

//     function handleClick() {
//       setCount(count + 1);
//     }

//     return (
//       <div>
//         <h1>Counters that update together</h1>
//         <MyButton count={count} onClick={handleClick} />
//         <MyButton count={count} onClick={handleClick} />
//       </div>
//     );
//   }

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
