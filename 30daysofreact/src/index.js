import React from "react";
import ReactDOM from "react-dom/client";
import thumbnail from "./images/lb-thumbnail.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const jsxElement = <h1>This is JSXElement</h1>;
// const title = <h2>Getting Started React</h2>;

const welcome = "Welcome to 30 days fo React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Bsavench",
  lastName: "Bhbushja",
};
const date = new Date();
const month = date.getMonth();
const currentDate = date.getDate();
const year = date.getFullYear();

const header = (
  <header className="header-wrapper">
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>
      {" "}
      {author.firstName} {author.lastName}
    </p>
    <small>
      {currentDate}/ {month}/{year}
    </small>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne}+{numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1998;
const age = year - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const techs = ["HTML", "CSS", "Javascript"];
const techsFromatted = techs.map((tech) => <li>{tech}</li>);
const user = (
  <div>
    <img src={thumbnail} alt="badh gsfd" />
  </div>
);

const main = (
  <main className="main-wrapper">
    <p>
      Prerequistite to get Started{" "}
      <strong>
        <em>react.js</em>
      </strong>
      :
    </p>
    <ul>{techsFromatted}</ul>
    {user}
    {result}
    {personAge}
  </main>
);

const copyRight = "CopyRight 2020";

const footer = (
  <footer className="footer-wrapper">
    <p>{copyRight}</p>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);
root.render(<React.StrictMode>{app}</React.StrictMode>);
