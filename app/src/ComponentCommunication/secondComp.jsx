import { Component } from "react";

export default class SecondComp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <h2>{this.props.newmessage}</h2>
        </div>)

    }
}