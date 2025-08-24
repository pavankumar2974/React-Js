import { Component } from "react";
import Child from "./Child";


export default class Parent extends Component{
    constructor(){
        super();
        this.state={
            message:"Hi I am from Parent Component called by child component by using props in child and assgisning the state to a varible"
        }
    }

    render(){
        return(<div>
            <Child newmessage={this.state.message} />
        </div>)
    }
}