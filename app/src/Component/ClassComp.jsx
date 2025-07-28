import { Component } from "react";


class ClassComp extends Component{
    state={
        message:"Welcome to ClassComp"
    }
    
render(){
    return(<div>
        <h1>{this.state.message}</h1>
    </div>

    )
}
}
export default ClassComp;