import { useState } from "react";
import Comp from "./Comp";
import { Link } from "react-router-dom";

export default function App() {
  const [state, setState] = useState(3);

  function doMultiply() {
    const obj1 = state;
    setState(obj1 * 3);
  }

  return (
    <>
      <h1>Current value: {state}</h1>
      <button onClick={doMultiply}>Multiply</button>
      <Comp />
      <Link to="/calc">Go to Calculator</Link>
    </>
  )
}