import { Component } from "react";
import ChildTwo from "./ChildTwo";



export default class ParentTwo extends Component{
    constructor(){
        super();
        this.state={
            message:"",
        };
    }

    receiveDataFromChild=(msg)=>{
        console.log("Data From Child",msg);
        this.setState({message:msg});
    };

    render(){
        return(<div>
            <h2>{this.state.message}</h2>
            <ChildTwo getInfo={this.receiveDataFromChild} />
        </div>);
    }
}