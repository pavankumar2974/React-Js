import { Component } from "react";
import User from "./User";



export default class Child extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello",
        };
    }
    static getDerviedStateFromProps(Props, state) {
        console.log("getDerivedStateFromsProps triggred");
        if (Props.count < 50) {
            return { message: "value is less than 50" };
        } else {
            return {
                message: "value is Greater than 50"
            };
        }
    }
    shouldComponentUpdate() {
        console.log("ShouldComponentUpdate Triggered");
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
        )
    }
    getSnapshotBeforeUpdate() {
        console.log("getSnapShotBeforeUpdate Triggered");
        return null;
    }
    componentDidUpdate(preProps, PreState) {
        console.log(preProps, PreState);
        console.log("ComponentDidUpdate")
    }
}