import { Component } from "react";


export default class ChildComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: " i am from child Component  called by parent Component using props and function"
        }
    }
    senddatatoparent = () => {
        this.props.getInfo(this.state.message)
    }
    render() {
        return (
            <div>
                <button onClick={this.senddatatoparent}>Change</button>
            </div>
        )
    }
}