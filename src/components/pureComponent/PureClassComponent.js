import React, { PureComponent } from "react";

class PureClassComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // Correct way to update the count
    this.setState({ count: this.state.count + 1 });
  };
  // Import React: Import the React library at the beginning of your JavaScript file
  //  if you haven't already.

  // Define the Pure Component: Create a class that extends React.PureComponent. 
  // This class will inherit the default shouldComponentUpdate behavior for shallow comparisons.

  // Implement the Render Method: Inside the class, define the render method to return the 
  // JSX for the component.

  // Access Props and State: You can access props and state in the render method as usual.

  render() {
    console.log("It's a pure class component");
    return (
      <>
        <div>Pure Class Component</div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Update State</button>
      </>
    );
  }
}

export default PureClassComponent;
