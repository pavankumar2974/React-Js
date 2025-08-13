import { Component } from "react";
import CompA from "./CompA";
import CompB from "./CompB";



export default class SiblingComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commonMessage: "Welcome To Common Message",
    };
  }

  msgChangFunc = () => {
    this.setState({ commonMessage: "I Got Changed From Comp A" });
  };

  render() {
    return (
      <div>
        <CompA changeMsgComp={this.msgChangFunc} />
        <hr />
        <CompB msg={this.state.commonMessage} />
      </div>
    );
  }
}
