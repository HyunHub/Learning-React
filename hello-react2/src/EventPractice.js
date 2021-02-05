/* import React, { Component } from "react";

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
 */

import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
    // 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는
    // method를 this와 binding - 하지 않으면 this가 undefined를 가리키게 됨.
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick(e) {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="message"
          placeholder="Write Here"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
