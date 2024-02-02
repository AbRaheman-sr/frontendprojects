import React, { useContext } from "react";
import { CounterContext, Data } from "./ContextApi";

const CompB = () => {
  // const  data = useContext(Data);
  // return (
  //   <div>
  //     <h1>Lang of CompB:-{data} </h1>
  //   </div>
  // );

  const { counter1, setCounter1, counter2, setCounter2 } =
    useContext(CounterContext);

  return (
    <React.Fragment>
      <button onClick={() => setCounter1((abc) => abc + 1)}>Inc</button>
      <button onClick={() => setCounter2((counter) => counter - 1)}>Dec</button>
    </React.Fragment>
  );
};

export default CompB;
