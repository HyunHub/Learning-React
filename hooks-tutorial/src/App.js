import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Info2 from "./Info2";
import Average from "./Average";

const App = () => {
  // const [visible, setVisible] = useState(false);
  // //return <Counter />;
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  // return <Counter />;
  // return <Info2 />;
  return <Average />;
};

export default App;
