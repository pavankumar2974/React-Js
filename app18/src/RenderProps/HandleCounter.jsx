import { Component } from "react";


export default class HandleCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    increse = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrese = () => {
        this.setState({ count: this.state.count - 1 })
    }
    reset = () => {
        this.setState({ count: 0 })
    }
    render() {
        return (
            <div>
                {this.props.render(
                    this.state.count,
                    this.increse,
                    this.decrese,
                    this.reset,
                )}
            </div>
        )
    }

}