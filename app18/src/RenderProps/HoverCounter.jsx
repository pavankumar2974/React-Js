import { Component } from "react";


export default class HoverCounter extends Component{
    render(){
        return(
            <div>
                <button onMouseOver={incrementCount}>Increment</button>
                <button onMouseOver={decrementCount}>Decrement</button>
                <button onMouseOver={resetCount}>Reset</button>
                <p>count:</p>
            </div>
        )
    }
}