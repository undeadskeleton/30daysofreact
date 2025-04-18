import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import User from "./assets/mistakes_made_hooks/objectPassing.jsx";
import Cart from "./assets/information_from_state/infofromstateorprops.jsx";
import Price from "./assets/primitiveandnonprimitives/priandnonpri.jsx";
import Blog from "./assets/initwithobj/initwithobj.jsx";
import ComponentExample1 from "./assets/custom hooks/customhook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentExample1 />
  </StrictMode>
);
