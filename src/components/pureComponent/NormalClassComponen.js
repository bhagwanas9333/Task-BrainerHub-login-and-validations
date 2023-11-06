import React, { Component } from "react";

class NormalClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // Correct way to update the count
    this.setState({ count: this.state.count + 0 });
  };

  render() {
    console.log("It's a normal class component");
    return (
      <>
        <div>Normal Class Component</div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Update State</button>
      </>
    );
  }
}

export default NormalClassComponent;
