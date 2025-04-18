import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";

function MyApp() {
  return (
    <div>
      <h1>Custom APp</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visiit google",
};

const anotherUser = " chai aur react another user";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(reactElement);
