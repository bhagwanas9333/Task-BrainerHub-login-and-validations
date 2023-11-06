import React from "react";
import PureClassComponent from "./PureClassComponent";
import NormalClassComponent from "./NormalClassComponen";
import NormalFunctionComponent from "./NormalfunctionComponent";
import PureFunctionComponent from "./PureFunctionComponent";

const PureComponent = () => {
  return (
    <>
      <h2>Create Pure Component </h2>
      <hr/>
      <NormalClassComponent />
      <hr />
      <PureClassComponent />
      <hr/>
      <NormalFunctionComponent/>
      <hr/>
      <PureFunctionComponent/>
    </>
  );
};

export default PureComponent;
