import { Component } from "react";
import TwoComp from "./TwoComp";



export default class OneComp extends Component{
constructor(){
    super();
    this.state={
        message:"Welcome to OneComp",
    }
}
ChangeMsgInOne=()=>{
    this.setState({
        message:"The message is changed when clicked the button"
    })
}
render(){
    const{message}=this.state;
    return(<div>
        <TwoComp newmessage={message}/>
        <button onClick={this.ChangeMsgInOne}>Change</button>
    </div>

    )
}

}