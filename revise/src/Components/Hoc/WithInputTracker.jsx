import React ,{Component} from "react";

const WithInputTracker=(WrappedComponent)=>{
    return class extends Component{
        constructor(props){
            super(props);
            this.state={text:"",};
        }
        handleChange=(event)=>{
            this.setState({text:event.target.value});
        };
        render(){
            return(
                <WrappedComponent text={this.state.text}
                handleChange={this.handleChange}
                {...this.props} />
            );
        }
    };
};
export default WithInputTracker;

