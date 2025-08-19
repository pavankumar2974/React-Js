import { Component } from "react";
import AComp from "./AComp";
import BComp from "./BComp";




export default class Sibling extends Component{
    constructor(props){
        super(props);
        this.state={
            CommonMessage:"Welcome to Common Message",
        };

    }

    msgchangFunc=()=>{
        this.setState({CommonMessage:"I got changed from A"})
    }

    
    render(){
        return(
            <div>
            <AComp changeMsgComp={this.msgchangFunc} />   
            <hr/> 
            <BComp  msg={this.state.CommonMessage}/>
            <hr/>
            </div>
        )
    }
}