import React, { Component, useState } from "react";

/* class Counter extends Component {
  constructor(props) {
    // Component에 state를 설정할 때 constructor method 작성
    super(props); // class형 component 에서 constructor 작성시 꼭 호출
    this.state = {
      // state 초기값 설정
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; // state 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>Fixed-value {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
} */

/* class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>Fixed-value {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
} */

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>Fixed-value {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              // prevState 는 기존 상태
              return {
                number: prevState.number + 1,
              };
            });

            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log("방금 setState Call");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
