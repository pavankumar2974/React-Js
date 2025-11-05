import { Component } from "react";


export default class ShowMessage extends Component {
    render() {
        return (
            <div>
                <p>I am from Show Component</p>
                <hr />
                <h2>{this.props.msg}</h2>
            </div>
        );
    }
}