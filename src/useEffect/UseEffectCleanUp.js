import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const sizeChange = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeChange);
    return () => {
      window.removeEventListener("resize", sizeChange);
    };
  });
  return (
    <center>
      <h1>useEffect clesnUp Function</h1>
      <h2>Actual Size Of Screen Is {size}</h2>
    </center>
  );
};

export default UseEffectCleanUp;
