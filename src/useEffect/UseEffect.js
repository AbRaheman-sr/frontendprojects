import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Done ");
  }, [count]);

  const CountC = () => {
    setCount(count + 1);
  };

  const CountA = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <center>
        <h1>Inc Number: {count}</h1>
        <h1>Inc Number: {counter}</h1>
        <button onClick={CountC}>Count</button>
        <button onClick={CountA}>Counter</button>
      </center>
    </div>
  );
};

export default UseEffect;
