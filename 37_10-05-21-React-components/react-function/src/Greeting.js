import React from "react";

const Greeting = (props) => {
  const renderChildren = () => {
    return props.children ? <p>{props.children}</p> : null;
  };

  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      {renderChildren()}
    </div>
  );
};

export default Greeting;
