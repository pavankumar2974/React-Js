import React, { Component } from "react";


export default class RefsDemo extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }
    render() {
        return (
            <div>
                <h2>React Ref Demo Welcomes you</h2>
                <textarea ref={this.inputRef} />
            </div>
        );
    }
    componentDidMount() {
        this.inputRef.current.focus();
        this.inputRef.current.value = "Hello";
        this.inputRef.current.style.background = "Black";
        this.inputRef.current.style.color = "Red";
    }
}