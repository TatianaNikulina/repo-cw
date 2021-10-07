import React from "react";
import Greeting from "./Greeting";

const Main = () => {
  // return <h1>Hello World!</h1>;
  return (
    <div>
      <Greeting name="World" />
      <Greeting name="John" />
      <Greeting name="All">All you need is Love!</Greeting>
    </div>
  );
};

export default Main;
