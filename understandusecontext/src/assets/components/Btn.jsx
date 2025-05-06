import { useContext, useState } from "react";
import { Context } from "./Context";

export default function Btn() {
  const [signIn, setSignIn] = useContext(Context);

  return (
    <button onClick={() => setSignIn(!signIn)}>
      {signIn ? "Sign Out" : "Sign In"}
    </button>
  );
}
