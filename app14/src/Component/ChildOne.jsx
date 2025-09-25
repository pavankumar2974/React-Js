import { Component } from "react";
import UserOne from "./UserOne";

export default class ChildOne extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps triggered");
    if (props.count < 50) {
      return { message: "Value is Less Than 50" };
    } else {
      return { message: "Value is Greater Than 50" };
    }
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate triggered");
    return true;
  }

  render() {
    console.log("Render Method triggered");
    return (
      <div>
        <h2>{this.props.count}</h2>
        <h2>{this.state.message}</h2>
        {this.props.count <= 50 && <UserOne />}
      </div>
    );
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate triggered");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("componentDidUpdate triggered");
  }
}
