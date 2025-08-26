import { Component } from "react";


export default class BComp extends Component{
    render(){
        return(<div>
            <p>{this.props.msg}</p>
        </div>)
    }
}