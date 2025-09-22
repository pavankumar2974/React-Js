import { Component } from "react";



export default class Demo extends Component{
    constructor(){
        super();
        this.state={
            count:10,
        };
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+10});
    };

    render(){
        return(
            <div>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}