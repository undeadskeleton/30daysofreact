import React from "react";
import ReactDOM from "react-dom/client";
import porfilePic from "./image/SEO.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

const profile = (
  <div>
    <img src={porfilePic} alt="profile Pic " />
    <h3>Undead Skeleton</h3>
    <p>Senior Developer,Finland</p>
  </div>
);

const skills = (
  <div>
    <h3>SKILLS</h3>
    <div className="skill-list">
      <span>HTML</span>
      <span>CSS</span>
      <span>Sass</span>
      <span>JS</span>
      <span>React</span>
      <span>Redux</span>
      <span>Node</span>
      <span>MongoDB</span>
      <span>Python</span>
      <span>Flask</span>
      <span>Django</span>
      <span>NumPy</span>
      <span>Pandas</span>
      <span>Data Analysic</span>
      <span>MYSQL</span>
      <span>GraphQL</span>
      <span>D3.js</span>
      <span>Gatsby</span>
      <span>Docker</span>
      <span>Heroku</span>
      <span>Git</span>
    </div>
    <p>Joined on Aug 30,2020</p>
  </div>
);
const container = (
  <main>
    <section className="profile-inst">{profile}</section>
    <section className="skills">{skills}</section>
  </main>
);

root.render(<React.StrictMode>{container}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
