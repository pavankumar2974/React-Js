import { Component } from "react";


export default class LifeCycleHooksOne extends Component{
    constructor(){
        super();
        console.log("Welcome to Constructor");
        this.state={
            message:"",
        };
    }
     componentDidMount(){
        console.log("I am from componentDidMount");
    }
    
    render(){
        console.log("I am from render Method");
        return<div>LifeCycleHooksOne</div>;
    }
    static getDerivedStateFromProps(){
        console.log("Iam from getDerivedStateFromProps");
    }
   
}
