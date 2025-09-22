import { Component } from "react";



export default class ChildOne extends Component{
     constructor() {
    super();
    this.state = {
      message: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps triggred");
    if (props.count < 50) {
      return { message: "Value is Less Than 50" };
    } else {
      return { message: "Value Is Grater Than 50" };
    }
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate Triggered");
    return true;
  }

  render() {
    console.log("Render Method Triggered");
    return (
      <div>
        <h2>{this.props.count}</h2>
        <h2>{this.state.message}</h2>
        {this.props.count <= 50 && <UserOne />}
      </div>
    );
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate Triggered");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("componentDidUpdate");
  }
}