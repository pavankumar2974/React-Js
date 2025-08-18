// Calling a parent state  from child Component

import { Component } from "react";
import ChildComp from "./ChildComp";


export default class ParentComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome to parent Component called from child Component ",
        }
    }
    render() {
        return (
            <div>
                <ChildComp newmessage={this.state.message} />
            </div>
        )
    }
}

