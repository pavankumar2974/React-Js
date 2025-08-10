import { Component } from "react";
import ChildOne from "./ChildOne";

export default class ParentOneComp extends Component {  
    constructor() {
        super();
        this.state = {
            message: "",
        };
    }

    receiveDataFromChild = (msg) => {
        console.log("Data From Child:", msg); 
        this.setState({ message: msg });
    };

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <ChildOne getInfo={this.receiveDataFromChild} /> 
            </div>
        );
    }
}
