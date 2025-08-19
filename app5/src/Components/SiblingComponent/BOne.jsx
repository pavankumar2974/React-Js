import { Component } from "react";


export default class BOne extends Component{
    render(){
        return(
            <div>
                <p>{this.props.msg}</p>
            </div>
        )
    }
}