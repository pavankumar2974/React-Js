// T get the data from Child 

import { Component } from "react";
import ChildCompOne from "./ChildCompOne";

export default class ParentCompOne extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
        };
    }

    receiveDataFromChild = (msg) => {
        // console.log("Data From Child:", msg);
        this.setState({ message: msg });
    };

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>

                <ChildCompOne getInfo={this.receiveDataFromChild} />
            </div>
        );
    }
}
