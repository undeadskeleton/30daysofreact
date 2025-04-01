import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./scss/style.css";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
