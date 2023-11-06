import { Button } from "@mui/material";
import React, { Component } from "react";

class WithoutHook extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // componentDidMount
  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  // componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
    }
  }

  // componentWillUnmount
  componentWillUnmount() {
    // Cleanup code here
  }

  render() {
    return (
      <div>
      <h2> Without Hook </h2>
        <p>Count: {this.state.count}</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </Button>
      </div>
    );
  }
}

export default WithoutHook;
