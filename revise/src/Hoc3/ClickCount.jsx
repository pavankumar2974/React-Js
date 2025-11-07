import { Component } from "react";



export default class ClickCount extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    };
    decrementCount = () => {
        this.setState({ count: this.state.count - 1 })
     } ;
        resetCount = () => {
            this.setState({ count: 0 });
        };

            
        
        render(){
            return (
                <div>
                    <button onClick={this.incrementCount}>Increment</button>
                    <button onClick={this.decrementCount}>Decrement</button>
                    <button onClick={this.resetCount}>Reset</button>
                    <h2>Count:{this.state.count}</h2>
                </div>
            )
        }
    
    }

