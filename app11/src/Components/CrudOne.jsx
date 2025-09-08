import { Component } from "react"



export default class CrudOne extends Component{
    
    render(){
        return(
            <div>
                <form>
                    <label htmlFor="Name" >Enter Name</label>
                    <input type="text" name="Name"value={Name} />
                    <br/>
                    <label htmlFor="age">Enter Age</label>
                    <input type="number" name="age" value={age}/>
                    <br/>
                    <label htmlFor="email">Enter Email</label>
                    <input type="email"name="email" value={email}/>
                    <br/>
                </form>
            </div>
        )
    }
}