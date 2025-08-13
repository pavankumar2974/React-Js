import { Component } from "react";


export default class ChildComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "I am Coming From Child",
        };
    }

    sendDataToparent = () => {
        this.props.getInfo(this.state.message);
    };

    render() {
        console.log(this.props.getInfo);
        return (
            <div>
                <h2>Iam From Child Component</h2>
                <button onClick={this.sendDataToparent}>Send Data to parent</button>
            </div>
        );
    }

}