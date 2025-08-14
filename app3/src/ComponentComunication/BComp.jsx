import { Component } from "react";


export default class BComp extends Component{
    render(){
        return(
            <div>
                <h2>I am From Component B</h2>
                <p>{this.props.msg}</p>
            </div>
        );
    }
}