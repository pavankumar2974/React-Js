import { Component } from "react";
import AComp from "./AComp";
import BComp from "./BComp";




export default class Sibling extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Commonmessage: "Hi  iam from sibling component"
        }
    }

    Msgchangefunc=()=>{
    this.setState({Commonmessage:"I am changeded fro Acomp"})
    }
    render() {
        return (<div>
            <BComp Msg= {this.state.Commonmessage} />
            <AComp changeMsgComp={this.Msgchangefunc} />
            
        </div>)
    }
}