import React from "react";

/* const MyComponent = () => {
  return <div>New Component</div>;
};
 */

//const MyComponent = (props) => {
// return (
//  <div>
//   Hello , My name is {props.name} <br />
//    children is {props.children}{" "}
//   {/*MyComponent 태그 사이에 작성한 문자열을 내부에서 보여주기 위해*/}
//  </div>
// );
//};

/* const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      Hi, My name is {name} <br />
      children is {children}
    </div>
  );
}; */

/* const MyComponent = ({ name, children }) => {
  return (
    <div>
      Hi, My name is {name} <br />
      children is {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default",
}; */

import PropTypes from "prop-types";

/* const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Hello, My name is {name}
      <br />
      children is {children} <br />
      My favoriteNumber is {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired, // isRequired !! 
}; */

// import React, { Component } from 'react';

/* class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        Hi, My name is {name} <br />
        children is {children} <br />
        favoriteNumber is {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "default",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
}; */

// class 내부에서 지정도 가능
class MyComponent extends Component {
  static defaultProps = {
    name: "default",
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        Hi, My name is {name} <br />
        children is {children} <br />
        favoriteNumber is {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
