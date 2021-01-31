// import logo from './logo.svg';
import React from "react";
import "./App.css";
//import MyComponent from "./MyComponent";
//import Counter from "./Counter";
import Say from "./Say";

//function App() {
// APP 이라는 Component를 만들어 줌 - 함수형 Component, 밑 코드는 HTML이 아니고 JSX(javaScript의 확장 문법)라고 부름
//const name = "React"; // const - 한 번 설정하면 재설정 불가, let 선언 후 유동적 변할 수 있을 때 사용 for 문,, 둘 다 같은 블록 내 중복 선언 불가능
/*   return (
    // <>는 Fragment 생략된 거,, 여러 요소가 무조건 부모 요소 하나에 감싸져 있어야 해서 씀. div를 쓰기 싫을 때
    <>{name === "React" ? <h1>Hello {name} !!</h1> : <h2>안녕 리액트</h2>}</>
  ); */

//return <div>{name ==='React' && <h1>React !!</h1>}</div>;

//const ud = undefined;

// return ud || 'undefined 입니다'; undefined 입니다 출력
// return <div>{ud || 'React'}</div>;  React 출력
// return <div>{ud}</div>;  JSX 내부에서 렌더링 하는 것은 괜찮, 하지만 return ud; 는 불가능

/*   const style = {
    backgroundColor: 'black', // background-Color (camelCase)
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
    
  };

  return <div style={style}>{name}</div>; */

/*   return (
    <div
      style={{
        backgroundColor: 'black', // background-Color (camelCase)
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16
      }}
      >
        {name}
    </div>
  ); */

/*   return (
    <div className="react">
      {name} 
    </div>
  ); */
//}

/* const App = () => {
  return <MyComponent />;
}; */

/* const App = () => {
  return <MyComponent name="react" />;
}; */

/* const App = () => {
  return <MyComponent name="react">React</MyComponent>;
}; */

/* const App = () => {
  return <MyComponent name={3}>React</MyComponent>; // name : String -> ERROR !! 
}; */

/* const App = () => {
  return (
    <MyComponent name="react" favoriteNumber={4}>
      React
    </MyComponent>
  );
}; */

/* const App = () => {
  return <Counter />;
}; */

const App = () => {
  return <Say />;
};
export default App;
