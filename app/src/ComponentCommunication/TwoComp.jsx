import { Component } from "react";



export default class TwoComp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { newmessage } = this.props
        return (<div>
            <ul>{Object.values(newmessage).map((val, i) => {
                return <li key={i}>{val}</li>
            })}

            </ul>
        </div>)
    }
}