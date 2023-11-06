import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const FunctionComponent = (props) => {
  // const [count, setCount] = useState(0);

  console.log("Function Component Pass to props :", props);


  // Define the Functional Component: Create your functional component by defining a function.
  //  This function will take props as its argument.

  // Access Props: To access props within the component, you can simply use the props argument that 
  // is automatically passed to your function.

  // Define Props: When using the component, you can pass in props as attributes, customizing the
  //  component's behavior and appearance.

  
  return (
    <>
      <Box style={{ display: "flex" }}>
        {/* <h2>Increment {count}</h2> */}
        {/* <Button onClick={() => setCount(count + 1)}>increment</Button> */}
      </Box>
      <Box style={{ display: "flex" }}>
        <h4>FunctionComponent </h4>
        <h3> Hello {props.name}</h3>
        <hr />
        <h2>Increment {props.count}</h2>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => props.setCount(props.count + 1)}
        >
          increment
        </Button>
      </Box>
    </>
  );
};

export default FunctionComponent;
