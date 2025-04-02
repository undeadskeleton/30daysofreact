import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charaterAllowed, setCharaterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopABCDEFGHIJKLMNOP";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charaterAllowed) str += "!@#$*&%.,";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.random() * str.length;
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charaterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charaterAllowed, passwordGenerator]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="bg-blue-300 w-2xl mx-auto my-4 py-6  px-8 rounded-lg">
        <h1 className="text-center text-4xl mb-[10px]">Password Generator</h1>

        <div className="flex">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="Password"
            className="py-4 px-5 bg-white w-full"
            ref={passwordRef}
          />
          <button
            className="px-6 bg-blue-500 text-white"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-4 justify-center">
          {/* length of the password */}
          <div className="">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="characterInput"
              onChange={() => setCharaterAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
