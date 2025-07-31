import { Component } from "react";
import TwoComp from "./TwoComp";



export default class OneComp extends Component {
    constructor() {
        super();
        this.state = {
            message: [
                "pavan",
                "21",
                "pavan@gmail.com"

            ],
        }
    }
    // ChangeMsgInOne=()=>{
    //     this.setState({
    //         message:{
    //             name:"yaswant",
    //             age:"20",
    //             gmail:"yaswant@gmail.com"
    //         }
    //     })
    // }

    ChangeMsgInOne = () => {
        this.setState({
            message: [
                "yaswant",
                "20",
                "yaswant@gmail.com"
            ]
        })
    }
    render() {
        const { message } = this.state;
        return (<div>
            <TwoComp newmessage={message} />
            <button onClick={this.ChangeMsgInOne}>Change</button>
        </div>

        )
    }

}