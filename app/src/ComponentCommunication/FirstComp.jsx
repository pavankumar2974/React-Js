

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
        this.setState.message
    }
    render(){
        return(<div>
            <SecondComp newmessage={this.state.message}/>
        </div>)
    }
}