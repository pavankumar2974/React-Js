

import { Component } from "react";


export default class UserComp extends Component {
    render() {
        return (
            <div>
                <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="" />

            </div>
        );
    }
    componentWillUnmount() {
        alert("since you reached the limit, The Image will be removed");
    }
}