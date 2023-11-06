import React, { useState, useCallback } from "react";

function PureFunctionComponent(props) {
  const [count, setCount] = useState(0);

  // const increment = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);
  const increment = () => {
    setCount(count + 1);
  };

  console.log("It's a  pure functional component");

  return (
    <>
      <div>Pure Function Component</div>
      <h2>{count}</h2>
      <button onClick={increment}>Update State</button>
    </>
  );
}

export default React.memo(PureFunctionComponent);
