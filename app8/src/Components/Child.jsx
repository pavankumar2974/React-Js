import { Component } from "react";


export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "I am called from parent " }
    }
        sendDataToParent = () => {
            this.props.getInfo(this.state.message)
        }
    
    
    render() {
        console.log(this.props.getInfo)
        return(
            <div>

                <h1>Child Component</h1>
                <button onClick={this.sendDataToParent}>send </button>
            </div>
        )

}
}