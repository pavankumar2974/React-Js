import { Component } from "react";


export default class BComp extends Component {
    render() {
        return (
            <div>
                <h1>I am from BComp</h1>
                <p>{this.props.Msg}</p>
            </div>
        )
    }
}