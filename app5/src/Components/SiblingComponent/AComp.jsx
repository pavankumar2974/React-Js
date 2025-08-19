import { Component } from "react";


export default class AComp extends Component{
    changeMsg=()=>{
        this.props.changeMsgComp();
    }
    render(){
        return(
            <div>
                {/* <h1>I am from A Component called by Sibiling Component</h1> */}
            <button onClick={this.changeMsg}>change Comp B</button>
            </div>
        )
    }
}