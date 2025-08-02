import { Component } from "react";

class ClassSixComp extends Component {
    constructor() {
        super();
        this.state = {
            Course: [
                "BCA",
                "BHM",
                "BBA",
                "BCOM",
                "BSC"
            ]


        }
    }
    render() {
        const { Course } = this.state
        return <div>
            <ul>
                {Object.values(Course).map((val, i) => { return <li key={i}>{val}</li> })}
            </ul>
        </div>
    }
}
export default ClassSixComp;