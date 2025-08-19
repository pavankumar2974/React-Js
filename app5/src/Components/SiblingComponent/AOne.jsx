import { Component } from "react";


export default class AOne extends Component{
    ChangeMsg=()=>{
        this.props.ChangeMsgComp();
    };
    render(){
        return(
            <div>
                <button onClick={this.ChangeMsg}>Change Comp B</button>
            </div>
        );
    }
}