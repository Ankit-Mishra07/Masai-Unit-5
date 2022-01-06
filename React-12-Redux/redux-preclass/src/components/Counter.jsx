import React from "react";
import { addCounter, reduceCounter } from "../Redux/action";
import { store } from "../Redux/store";
import { useState } from "react";

const Counter = () => {
  const { counter } = store.getState();
  const { dispatch } = store;
  const [state, setstate] = useState(0);

    const forceUpdate = () => setstate(state + 1)

  const handleAdd = () => {
    dispatch(addCounter(1));
    forceUpdate()
    };

  const handleReduce = () => {
    dispatch(reduceCounter(1));
    forceUpdate()
  };
  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </>
  );
};

export default Counter;
