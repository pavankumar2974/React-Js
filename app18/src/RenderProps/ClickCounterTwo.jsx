import { Component } from "react";


export default class ClickCounterTwo extends Component{
    render(){
        const{count,increse,decrese,reset}=this.props;
        return (
            <div>
                <button onClick={increse}>Increment</button>
                <button onClick={decrese}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <p>Count:{count}</p>
            </div>
        )
    }
}