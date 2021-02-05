import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="message"
          placeholder="Write here"
          onChange={(e) => {
            // e 객체는 SyntheticEvent로 웹 브라우저의 native event를 감싸는 객체
            //console.log(e);
            //console.log(e.target.value); // event가 발생할 때 변할 input value인 e.target.value를 console에 기록
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
