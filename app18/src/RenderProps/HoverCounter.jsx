import { Component } from "react";


export default class HoverCounter extends Component {
    render() {
        const { count, increse, decrese, reset } = this.props
        return (
            <div>
                <button onMouseOver={increse}>Increment</button>
                <button onMouseOver={decrese}>Decrement</button>
                <button onMouseOver={reset}>Reset</button>
                <p>count:{count}</p>
            </div>
        )
    }
}