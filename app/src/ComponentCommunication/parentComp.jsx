import { Component } from "react";
import ChildComp from "./childComp";

export default class ParentComp extends Component {
  constructor() {
    super();
    // This is called the state in parent
    this.state = {
      message: "Parent Component text Is Called from Child Component !!",
    };
  }

  changeMsgInParent = () => {
    this.setState({
      message: "Text Changed in Parent When You clicked the Button",
    });
  };

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <button onClick={this.changeMsgInParent}>Change Message</button>

        <hr />
        {/* Child component called from Parent Component */}
        <ChildComp newMessage={this.state.message} />
      </div>
    );
  }
}
