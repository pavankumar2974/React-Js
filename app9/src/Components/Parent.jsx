//Calling a Parent state in child
import { Component } from "react";
import Child from "./Child";


export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hi I am from Parent Component"
        }
    }
    render() {
        return (
            <div>
                <Child newmessage={this.state.message} />
            </div>
        )
    }
}
