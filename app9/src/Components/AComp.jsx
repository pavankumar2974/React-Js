import { Component } from "react";

export default class AComp extends Component {
  changeMsg = () => {
    this.props.changeMsgComp();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Iam From Component A</h2>
        <button onClick={this.changeMsg}>Change Comp B</button>
      </div>
    );
  }
}
