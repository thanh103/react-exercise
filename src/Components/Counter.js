import React, { useState } from "react";
import "../App.css";
function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
    return;
  };
  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    return;
  };
  return (
    <div className="App">
      <h1> {count} </h1>
      <div className="main-body center">
        <button className="button-custom" onClick={increase}>
          +
        </button>
        <button className="button-custom" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
