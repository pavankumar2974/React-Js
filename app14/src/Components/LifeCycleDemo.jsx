import { Component } from "react";
import Child from "./Child";



export default class LifeCycleDemo extends Component{
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
                <Child count={this.state.count} />
            </div>
        )
    }
}