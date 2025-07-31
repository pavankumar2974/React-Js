

import { Component } from "react";
import SecondComp from "./secondComp";



export default class FirstComp extends Component{
    constructor(){
        super();
        this.state={
            message:"Welcome to FirstComp called by second Comp"
        }

    }
    ChangeMsgInFirst =()=>{
        this.setState ({message:"message is changed when clicked on button"})
    }
    render(){
        return(<div>
            <button onClick={this.ChangeMsgInFirst}>Change</button>
            <SecondComp newmessage={this.state.message}/>
        </div>)
    }
}