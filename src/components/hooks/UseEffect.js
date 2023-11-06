import React, { useEffect } from "react";
import { useState } from "react";
import "../../App.css";
import { Button } from "@mui/material";
import Users from "./Users";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

//   useEffect(() => {
//     console.warn("useEffect hook :", count);
//     console.warn("useEffect hook :", data);
//   },[count]);

  return (
    <>
      <div className="App">
        <h2>useEffect in React:{count}</h2>
        <h2>useEffect in React:{data}</h2>
        <Button onClick={() => setCount(count + 1)}>Update Count</Button>
        <Button onClick={() => setData(data + 1)}>Update Data</Button>
        <hr />
        <Users count={count} data={data} />
      </div>
    </>
  );
};

export default UseEffect;
