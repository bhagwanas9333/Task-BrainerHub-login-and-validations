import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Users = (props) => {
 
//   useEffect(() => {
//     console.log("useEffect :",props.count);
//     console.log("useEffect :",props.data);
//   });

  useEffect(() => {
    console.log("useEffect :",props.count);
    // console.log("useEffect :",props.data);
  },[props.count]);

//   useEffect(() => {
//     console.log("useEffect :",props.count);
//     console.log("useEffect :",props.data);
//   },[props.data]);

  return (
    <>
      <div>Users</div>
      <h2>Count:{props.count}</h2>
      <h2>Data:{props.data}</h2>
    </>
  );
};

export default Users;
