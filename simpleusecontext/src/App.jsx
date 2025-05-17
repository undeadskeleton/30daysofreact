import { useState } from "react";
import "./App.css";
import { useContext } from "react";
import Context from "./Components/Context/Context.jsx";
import Child1 from "./Components/Childs/Child1.jsx";
import Child2 from "./Components/Childs/Child2.jsx";
import Child3 from "./Components/Childs/Child3.jsx";
import Nav from "./Components/Nav/Nav.jsx";

function App() {
  return (
    <Context.Provider value="Undead skeleton">
      <h1>This is the parent</h1>
      <Child1 />
      <Child2 />
      <Child3 />
      <Nav />
    </Context.Provider>
  );
}

export default App;
