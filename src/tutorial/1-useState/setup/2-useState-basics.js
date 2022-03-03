import React, { useState } from "react";

const UseStateBasics = () => {
  /* console.log(useState("hello world"));
  const value = useState(1)[0];
  const handler = useState(1)[1];
  console.log(value, handler); */
  const [text, setText] = useState("Random Title");
  const changeHandler = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={changeHandler}>
        Click Me!
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
