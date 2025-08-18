import { Component } from "react";


export default class ChildCompOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "I am Coming from child",
        };
    }

    sendDataToParent = () => {
        this.props.getInfo(this.state.message);
    };

    render() {
        // console.log(this.props.getInfo)
        return (
            <div>
                {/* <h1>I am child Component</h1> */}
                <button onClick={this.sendDataToParent}>Send data to parent</button>
            </div>
        )
    }
}