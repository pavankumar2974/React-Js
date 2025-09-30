import { Component } from "react";


export default class Refs extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }
    render() {
        return (
            <div>
                <h2>{"Welcome to React Ref Demo"}</h2>
                <input type="text" ref={this.inputRef} />
            </div>
        );
    }
    componentDidMount() {
        this.inputRef.current.focus();
        this.inputRef.current.value = "Hello";
        this.inputRef.current.style.background = "darkblue";
        this.inputRef.current.style.color = "White";
    }
}