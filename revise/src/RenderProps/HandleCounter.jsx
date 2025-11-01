import { Component } from "react";


export default class HandleCounter extends Component{
 constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        {/* <h2>{this.props.hello}</h2>
        {this.props.sayHello()} */}

        {this.props.render(
          this.state.count,
          this.incrementCount,
          this.decrementCount,
          this.resetCount
        )}
      </div>
    );
  } 
}