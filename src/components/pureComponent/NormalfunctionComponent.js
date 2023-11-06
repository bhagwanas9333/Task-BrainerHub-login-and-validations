import React, { useState } from "react";

function NormalFunctionComponent(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log("It's a normal function component");

  return (
    <>
      <div>Normal Function Component</div>
      <h2>{count}</h2>
      <button onClick={increment}>Update State</button>
    </>
  );
}

export default NormalFunctionComponent;
