import { Component } from "react";
import AComp from "./AComp";
import BComp from "./BComp";

export default class Sibling extends Component {
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
                <AComp changeMsgComp={this.msgChangFunc} />
                <hr />
                <BComp msg={this.state.commonMessage} />
            </div>
        );
    }
}