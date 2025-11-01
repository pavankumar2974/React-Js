import { Component } from "react";

export default class HoverCounter extends Component {
    render() {
        const { count, incrementCount, decrementCount, resetCount } = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>Increment (Hover)</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <p>Count: {count}</p>
            </div>
        );
    }
}
