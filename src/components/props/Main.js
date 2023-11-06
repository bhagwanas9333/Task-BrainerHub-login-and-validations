import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import { useState } from "react";

const Main = (props) => {
  const [count, setCount] = useState(0);

  // Define the class: Create a class that extends React.Component.

  // Create the render method: Inside the class, define a render method.
  //  This method should return the JSX that you want the component to render.
  
  // Access props: To access the props, use this.props within the render method.


  return (
    <>
      <h2>Main Component</h2>
      <hr/>
      <ClassComponent name="Harshad" count={count} setCount={setCount} />
      <hr/>
      <FunctionComponent name="Raj" count={count}  setCount={setCount}/>
    </>
  );
};

export default Main;


// In React.js, "props" is short for "properties" and refers to a mechanism for passing 
// data from a parent component to a child component. Props are read-only, and they allow 
// you to customize and configure a child component. Here's a brief summary of props in React:

//     Passing Data: Props are used to pass data from a parent component to a child component.
//  This data can include strings, numbers, objects, functions, and more.

//     Read-Only: Props in a child component are read-only, meaning that the child component 
// cannot modify the data it receives through props.

//     Component Customization: Props allow you to customize and configure child components 
// by providing them with the necessary information and behavior.

//     Declaration: Props are declared in the child component's function or class definition.
//  You can access them as properties of the props object.