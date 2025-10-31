import React, { Component } from "react";

export default class ClickCounter extends Component {
    render() {
        const { count, incrementCount, decrementCount, resetCount } = this.props;
        return (
            <div>
                <h3>Click Counter</h3>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <p>Count: {count}</p>
            </div>
        );
    }
}
