// import ReducerExample from "./components/reducerExample";
// import ContextApi from "./contextApi/ContextApi";
// import UseEffect from "./useEffect/UseEffect";
import { useEffect } from "react";
import UseEffectCleanUp from "./useEffect/UseEffectCleanUp";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      {/* useReducer Example */}
      {/* <ReducerExample /> */}

      {/* Context Api */}
      {/* <ContextApi /> */}

      {/* useEffect Hook Example */}
      {/* <UseEffect /> */}

      {/* useEffect CleanUp Function */}
      <UseEffectCleanUp />
    </div>
  );
}

export default App;
