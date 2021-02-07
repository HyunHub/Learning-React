import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;

        clientHeight : 스크롤이 있는 박스의 높이(300)
        scrollHeight : 스크롤이 있는 박스 안의 div 높이(650)
        scrollTop : 세로 스크롤바 위치 (0~350)
         */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
