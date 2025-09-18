import { Component, PureComponent } from "react";


export default class LifeCycleHooksDemo extends Component{
    constructor(props){
        super(props);

        this.state={
            message:"Hello I am from state Message",
            users:[],
        };
    }
    
    // static getDerivedFromProps(props,state){
    //     console.log(props,state);
    // }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <ul>
                    {this.state.users.map((usr,i)=>{
                        return <li key={i}>{usr.name},{usr.email},{usr.id},{usr.username}</li>;
                    })}
                </ul>
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