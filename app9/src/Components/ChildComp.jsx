import { Component } from "react";


export default class ChildComp extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "Hi I am from child state called from parent" }
    }
    sendDataToParent = () => {
        this.props.getInfo(this.state.message);
    }
    render() {
        return (<div>
            <h2>Click the below button to get the message</h2>
            <button onClick={this.sendDataToParent}>Send</button>
        </div>)
    }
}