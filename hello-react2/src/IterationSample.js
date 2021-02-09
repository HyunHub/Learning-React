import React, { useState } from "react";

const IterationSample = () => {
  /*   const names = ["눈사람", "얼음", "눈", "바람"];
  // key 값을 지정해줘야 하는데 여기는 고유한값이 없으니까 index 이용함.
  const nameList = names.map((name, index) => <li key={index}>{name}</li>); */

  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // 새로운 항목을 배열에 추가
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id); // 배열에서 삭제
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <botton onClick={onClick}>추가</botton>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
