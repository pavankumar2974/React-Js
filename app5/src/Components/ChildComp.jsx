import { Component } from "react";


export default class ChildComp extends Component{
 
    render(){
        return(
            <div>
                <h2>{this.props.newmessage}</h2>
            </div>
        )
    }
}