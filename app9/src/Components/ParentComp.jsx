import { Component } from "react";
import ChildComp from "./ChildComp";



export default class ParentComp extends Component{
    constructor(){
        super();
        this.state={
            message:""
        }
    }
    receiveDataFromChild=(Msg)=>{
        this.setState({message:Msg})
    }
    render(){
        return(<div>
            <h2>{this.state.message}</h2>
            <ChildComp getInfo={this.receiveDataFromChild} />
        </div>)
    }
}