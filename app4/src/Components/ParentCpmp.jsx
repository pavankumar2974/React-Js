import { Component } from "react";
import ChildComp from "./ChildComp";



export default class ParentCpmp extends Component{
    constructor(){
        super();
        this.state={
            message:"Welcome to parentComponent",

        }
    }
    render(){
        return(
            <div>
                
               
            
                <ChildComp newmessage={this.state.message}/>
            </div>
        )
    }
}