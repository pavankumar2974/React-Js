import { Component } from "react";


export default class DemoHooks extends Component{
   constructor(){
super();
this.state={
users:[],
}
   }
   
  render(){
    return(
        <div>
            <ul>{this.state.users.map((usr,i)=>{
                return<li key={i}>{usr.id},{usr.name},{usr.email}</li>
            })}</ul>
        </div>
    )
  }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((rawData)=>{
            return rawData.json();
        })
        .then((response)=>{
            console.log(response);
            this.setState({users:response});        
        });
    }
}