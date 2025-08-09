import { Component } from "react";



export default class parent extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
        };
    }

    receiveDataFromChild = (msg) => {
        console.log("DatamFrom Child", msg);
        this.setState({ message: msg });

    };

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>

            </div>
        )
    }
}