import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState([]);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    // console.log("render", resourceType);
  }, [resourceType]);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Post
        </button>
        <button
          type="button"
          onClick={() => {
            setResourceType("users");
          }}
        >
          User
        </button>
        <button
          type="button"
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comment
        </button>
        <h1>{resourceType}</h1>
        <div>{windowWidth}</div>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
}
