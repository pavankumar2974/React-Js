import { Component } from "react";
import AOne from "./AOne";
import BOne from "./BOne";




export default class SiblingComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CommonMessage: "Welcome to Common Message",
        };
    }

    msgChangfunc = () => {
        this.setState({ CommonMessage: "I am  a changed message from CompA" });
    };

    render() {
        return (
            <div>
                <AOne ChangeMsgComp={this.msgChangfunc} />
                <hr />
                <BOne msg={this.state.CommonMessage} />
            </div>
        )
    }
}
