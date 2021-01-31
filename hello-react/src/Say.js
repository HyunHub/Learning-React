import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); // useState 함수 인자에는 초깃값. 값의 형태는 자유.
  // 함수를 호출하면 배열이 반환. 첫 번째 원소는 현재 상태. 두 번째 원소는 형태를 바꿔주는 함수. setter 함수
  const onClickEnter = () => setMessage("Hello!");
  const onClickLeave = () => setMessage("Bye!!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Exit</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        Red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        Green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
};

export default Say;
