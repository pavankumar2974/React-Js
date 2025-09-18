import { Component } from "react";


export default class DemoHooks extends Component{
   constructor(props){
super(props);
this.state={
    message:"hello",
users:[],
};
   }
   
   static getDerivedStateFromProps(props,state){
    console.log(props,state);
    if(props.age <=18){
        return{message:"you are a Teenager"};
    }else if(props.age>18 && props.age <=58){
        return{message:"you are an adult"};
    }else{
        return{message:"you are a senior citizen"};
    }
    return null;
   }

  render(){
    return(
        <div>
            <h2>{this.state.message}</h2>
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