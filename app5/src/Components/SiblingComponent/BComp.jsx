import { Component } from "react";



export default class BComp extends Component{
    render(){
        return(<div>
            {/* <h1>I am from B component called from Sibling Compomnent</h1> */}
        <p>{this.props.msg}</p>
        </div>)
    }
}