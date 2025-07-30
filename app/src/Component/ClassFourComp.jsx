import { Component } from "react";

class ClassFourComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome to ClassFour Component",
            bike: {
                bname: "RD-350",
                bprice: "80000",
                bmilage: "60km",
            },
            bikes: [
                "RD-350",
                "Rajdooth",
                "yezdi",
                "Fz-X",
            ],
            car: [
                "Innova",
                "Ertiga",
                "Fortuner",
            ]
        }
    }
    render() {
        const { message, bike, bikes, car } = this.state
        return <div>
            <h1>{message}</h1>
            <ul>
                {Object.values(bike).map((val, i) => { return <li key={i}>{val}</li> })}
            </ul>
            <ul>
                {Object.values(bikes).map((val, i) => { return <li key={i}>{val}</li> })}
            </ul>
            <ul>
                {Object.values(car).map((val,i)=>{return<li key={i}>{val}</li>})}
            </ul>
        </div>
    }

}
export default ClassFourComp;