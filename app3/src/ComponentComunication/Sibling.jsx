import { Component } from "react";
import AComp from "./AComp";
import BComp from "./BComp";



export default class Sibling extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CommonMessage: "Welcome to Common Message",
        };
    }

    msgChangFunc = () => {
        this.setState({ CommonMessage: "I got Changed From CompA" });
    };

    render() {
        return (
            <div>
                <AComp changeMsgComp={this.msgChangFunc} />
                <hr />
                <BComp msg={this.state.CommonMessage} />
            </div>
        );
    }
}