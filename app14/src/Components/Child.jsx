import { Component } from "react";
import User from "./User";

export default class Child extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps Triggered");
        if (props.count < 50) {
            return { message: "Value is less than 50" };
        } else {
            return { message: "Value is greater than 50" };
        }
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate Triggered");
        return true;
    }

    render() {
        console.log("Render Method Triggered");
        return (
            <div>
                <h2>{this.props.count}</h2>
                <h2>{this.state.message}</h2>
                {this.props.count <= 50 && <User />}
            </div>
        );
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate Triggered");
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Previous Props:", prevProps);
        console.log("Previous State:", prevState);
        console.log("componentDidUpdate Triggered");
    }
}
