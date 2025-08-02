import { Component } from "react";


class ClassObjComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome to ClassObjComp",

            bike: {
                bname: "Fz-x",
                bprice: "160000",
                bmilage: "45km",

            },
            bikes: [
                "Fz-x",
                "Rajdooth",
                "yezdi",
                "classic350",
                "passion pro",

            ]


        }
    }
    render() {
        const { message, bike, bikes } = this.state

        return <div>
            <h1>{message}</h1>

            <hr />
            <ul>
                <li>{this.state.bike.bname}</li>
                <li>{this.state.bike.bprice}</li>
                <li>{this.state.bike.bmilage}</li>
            </ul>
            <ul>
                {Object.values(bike).map((val, i) => {
                    return <li key={i}>{val}</li>
                })}
            </ul>
            <ul>
                {bikes.map((val, i) => {
                    return <li key={i}>{val} </li>
                })}
            </ul>

        </div>
    }

}

export default ClassObjComp;