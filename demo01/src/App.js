import React, { Component } from "react";
// * ES6 解构赋值写法 相当于
// import React from "react";
// const Component = React.Component;
class App extends Component {
  render() {
    // return (<div>Hello React!</div>)
    return [
      <div>Hello React!</div>,
      <span>{false ? "Hello World!" : "你好 React！"}</span>,
    ];
  }
}
export default App;
