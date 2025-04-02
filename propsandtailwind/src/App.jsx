import { useState } from "react";
import "./App.css";

import Card from "./components/card.jsx";

function App() {
  let myObj = {
    username: "undead",
    age: 28,
  };

  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-white p-6 rounded-xl mb-10">
        Tailwind Test
      </h1>
      <Card username="chaiaurcode" someObje={newArr} price="45" />
      <Card username="undead" price="" />
    </>
  );
}

export default App;
