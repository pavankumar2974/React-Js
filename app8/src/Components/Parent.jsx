import { Component } from "react";
import Child from "./Child";


export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            message: ""
        }
    }
    receiveDataFromChild = (Msg) => {
        this.setState({ message: Msg })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <Child getInfo={this.receiveDataFromChild} />
            </div>
        )
    }
}