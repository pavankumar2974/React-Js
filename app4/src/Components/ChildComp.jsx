import { Component } from "react";


export default class ChildComp extends Component {
    render() {
        return (
            <div>
                <h1>I am from Child Compomnent</h1>
                <hr />
                <h3>{this.props.newmessage}</h3>
            </div>
        )
    }
}
