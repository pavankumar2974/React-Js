import { Component } from "react";


export default class AComp extends Component{
    ChangeMsg=()=>{
        this.props.ChangeMsgComp();
    };

    render(){
        return(<div>
            <button onClick={this.ChangeMsg}>Change</button>
        </div>)
    }
    
}