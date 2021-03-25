import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 렌더링 될 때마다 콘솔에 찍힘
  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  // 컴포넌트가 처음 나타날 때만 콘솔에 문구가 나옴
  // useEffect(() => {
  //   console.log("마운트 될 때만 실행됩니다");
  // }, []);

  // 특정 값이 변경될 때만 호출
  // 두 번쨰 파라미터로 전달되는 배열 안에 검사하고 싶은 값 넣으면 됨
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
