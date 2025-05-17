import { useContext } from "react";
import PageNameContext from "../Context/Context";

export default function Child3() {
  const pageName = useContext(PageNameContext);

  return <p>This is {pageName}</p>;
}
