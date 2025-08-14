import { Component } from "react";


export default class AComp extends Component{
    ChangeMsg=()=>{
        this.props.changeMsgComp();
    };

    render(){
        console.log(this.ChangeMsg.props);
        return(
            <div>
                <h2>I am From Component</h2>
                <button onClick={this.ChangeMsg}>Change Comp B</button>
            </div>
        );
    }
}