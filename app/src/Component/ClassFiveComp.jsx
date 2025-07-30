import { Component } from "react";


class ClassFiveComp extends Component{
    constructor(){
        super();
        this.state={
            message:"Welcome to ClassFiveComponent",
            student:{
                sname:"Pavan",
                sid:"22BCA143",
                course:"BCA",
            },
            Students:[
                "Pavan",
                "Dinesh",
                "lokesh",
                "uday",
                "yaswant",
            ]
        }
    }
    render(){
        const{message,student,Students}=this.state
        return <div>
            <h1>{message}</h1>
            <ul>
                { Object.values(student).map((val,i)=>{return<li key={i}>{val}</li>})}
                {Object.values(Students).map((val,i)=>{return<li key={i}>{val}</li>})}
                </ul>
        </div>
    }
}
export default ClassFiveComp;