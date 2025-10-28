

import { Component } from "react";

import ChildComp from "./ChildComp";



export default class LifeCycleHooks extends Component {
    constructor() {
        super();
        this.state = {
            count: 10,
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 10 });
    };
    decrementCount = () => {
        this.setState({ count: this.state.count - 10 });
    };
    multipleCount = () => {
        this.setState({ count: this.state.count * 2 });
    };
    divide = () => {
        this.setState({ count: this.state.count / 2 });
    };
    render() {
        return (
            <div>
                <ChildComp count={this.state.count} />
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.multipleCount}>Multiple</button>
                <button onClick={this.divide}>Divide</button>
            </div>
        )
    }
}