import { Component } from "react";



export default class TwoComp extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(<div>
            <h1>{this.props.newmessage}</h1>
        </div>)
    }
}