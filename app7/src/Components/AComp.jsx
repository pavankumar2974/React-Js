import { Component } from "react";


export default class AComp extends Component {
    changeMsg=()=>{
        this.props.changeMsgComp();
    }
    render() {
        return (
            <div>
                <h1>I am from AComp</h1>
                <button onClick={this.changeMsg}>Change</button>
            </div>
        )
    }
}