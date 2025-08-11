import { Component } from "react";
import ChildComp from "./childComp";
import KumarComp from "./kumarComp";


export default class PavanComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "Pavan Component is called from kumar component"
        }
    }

    changeMsgInPavan = () => {
        this.setState({
            message: "Text is changed when you click the button"
        })
    }

    render() {
        const { message } = this.state
        return (
            <div>
                <KumarComp newmessage={message} />
                <button onClick={this.changeMsgInPavan}>Change</button>
            </div>
        )
    }
}