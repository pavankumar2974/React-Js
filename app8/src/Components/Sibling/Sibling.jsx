import { Component } from "react";
import CompA from "./AComp";
import BComp from "./BComp";
import AComp from "./AComp";


export default class Sibling extends Component{
constructor(props){
    super(props);
    this.state={
        CommonMessage:"hi i  am from sibling Component"
    }
}
msgChangFunc=()=>{
    this.setState({CommonMessage:"I Got Changed by CompA"})
}
render(){
    return(<div>
     <AComp ChangeMsgComp={this.msgChangFunc} />
     <BComp msg={this.state.CommonMessage} />   
    </div>)
}
}