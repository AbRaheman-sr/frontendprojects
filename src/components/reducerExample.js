import React from "react";
import { useReducer } from "react";

const initialVal = 0;

// pure function //reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, initialVal);

  const incNum = () => {
    dispatch({ type: "inc" });
  };
  const decNum = () => {
    dispatch({ type: "dec" });
  };
  return (
    <div>
      <h1>Let's Start {count}</h1>
      <button onClick={incNum}>Click</button>
      <button onClick={decNum}>Click</button>
    </div>
  );
};

export default ReducerExample;
