import { Component } from "react";
import AComp from "./AComp";
import BComp from "./BComp";




export default class Sibling extends Component{
    constructor(){
        super();
        this.state={
            message:"Hi  iam from sibling component"
        }
    }

    render(){
        return(<div>
            <h1>{this.state.message}</h1>
            <AComp />
            <BComp />
        </div>)
    }
}