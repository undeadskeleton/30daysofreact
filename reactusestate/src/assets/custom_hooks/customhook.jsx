import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return windowSize;
};

export default function ExampleComponet1() {
  const windowSize = useWindowSize();
  return <div>Component 1 {windowSize}</div>;
}

export function ExampleCompnent2() {
  const windowSize = useWindowSize();
  return <div>Component 2</div>;
}
