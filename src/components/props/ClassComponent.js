//! what are props
// props is properties
//

import { Box, Button } from "@mui/material";
import React, { Component, Fragment } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }

  // Define the class: Create a class that extends React.Component.

  // Create the render method: Inside the class, define a render method.
  //  This method should return the JSX that you want the component to render.

  // Access props: To access the props, use this.props within the render method.

  render() {
    console.log("Class Component  Pass props :", this.props);
    
    return (
      <Box style={{ display: "flex" }}>
        <h4>ClassComponent </h4>
        <h3> WelCome {this.props.name}</h3>
        <hr />
        <h2>Increment {this.props.count}</h2>

        <Button
          variant="outlined"
          color="warning"
          onClick={() => this.props.setCount(this.props.count + 1)}
        >
          increment
        </Button>
      </Box>
    );
  }
}
export default ClassComponent;
