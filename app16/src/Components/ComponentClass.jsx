import { Component } from "react";


export default class ComponentClass extends Component {
    constructor() {
        super();
    }
    render() {
        this.state = {
            message: "I am from component class",
             Pavan: "hi iam from pavan string"
        }
        
        return (
            <div>

                <h1>Welcome to ComponentClass</h1>
                <h2>{this.state.Pavan}</h2>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}