import { Component } from "react";


export default class KumarComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <h3>{this.props.newmessage}</h3>
        </div>)
    }
}