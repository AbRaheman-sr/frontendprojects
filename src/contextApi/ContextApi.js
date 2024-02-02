import React, { createContext, useState } from "react";
import CompB from "./CompB";

// export const Data = createContext();
// const ContextApi = () => {
// const [data, setData] = useState("JavaScript");
// const [name, setName] = useState(0);
// return (
//   <Data.Provider value={[data, name, setName]}>
//     <h1>Learning Context Api</h1>
//     <h1>Lang :- {data}</h1>
//     <h1>Name :- {name}</h1>
//     <CompB />
//   </Data.Provider>
// );
// };

// export default ContextApi;

export const CounterContext = createContext();
export default function MultiValueContextDemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <CounterContext.Provider
      value={{ counter1, setCounter1, counter2, setCounter2 }}
    >
      <h1>Count Inc Number{counter1}</h1>
      <h1>Count Dec Number{counter2}</h1>
      <CompB />
    </CounterContext.Provider>
  );
}
