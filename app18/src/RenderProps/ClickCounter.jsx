import { Component } from "react";


export default class ClickCounter extends Component{
    render(){
        return (
            <div>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <p>Count:</p>
            </div>
        )
    }
}