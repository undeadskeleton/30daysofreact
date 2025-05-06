import React, { useContext, useState } from "react";
import Nav from "./assets/components/Nav";
import { Context } from "./assets/components/Context";

export default function App() {
  const [signIn, setSignIn] = useState(false);
  return (
    <Context.Provider value={[signIn, setSignIn]}>
      <Nav />
      <h1>{signIn ? "Sign in" : "Sign out"}</h1>
    </Context.Provider>
  );
}
