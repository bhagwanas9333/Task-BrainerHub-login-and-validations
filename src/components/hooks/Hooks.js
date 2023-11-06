// In React, hooks are functions that allow you to add state and lifecycle
// features to functional components. They were introduced in React 16.8 to
// enable state management and side-effects within functional components,
// which were previously only possible with class components. React provides
// built-in hooks like useState and useEffect, but you can also create custom
// hooks for code reuse. Hooks have become a fundamental part of modern React
// development, making it easier to manage component state and side effects
// in a more concise and functional manner.

// with hook we con use class component  features in function
// component such as state ,life cycle ,pure component ,etc

import React from "react";
import { useState } from "react";
import UseEffect from "./UseEffect";
import WithoutHook from "./Without Hook";
import "../../App.css"

const Hooks = () => {
  const [name, setName] = useState("Mohini");

  return (
    <div className="App">
      <div>Hooks</div>
      {/* <WithoutHook /> */}
      <hr/>
      <UseEffect />
    </div>
  );
};

export default Hooks;
