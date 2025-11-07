import { Component } from "react";


export default class HoverCount extends Component{
    constructor(){
        super()
        this.state={count:0}
    }
    
    render(){
        console.log(this.state.count)
        return(
            <div>

            </div>
        )
    }
}