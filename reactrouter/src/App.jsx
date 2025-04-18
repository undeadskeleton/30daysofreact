import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <h1 className="bg-grey-600">This is Crash Course on React Router</h1>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
