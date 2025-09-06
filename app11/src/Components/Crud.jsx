import { Component } from "react";


export default class Crud extends Component{
    state={
        user:{
            Name:"",
            email:"",
            age:"",
        },

        users:[],
        editIndex:null,
        isValied:false,
    };

    checkValidation=()=>{
        console.log("Check");
        var checkform= true;
    }

render(){
    return(
        <div>
            <form>
                <label htmlFor="Name">Enter Name</label>
                <input type="text" name="Name"value={Name} onChange={this.handleChange} />
                <br/>
                <label htmlFor="email" >Enter Email</label>
                <input type="email" name="email" value={email} onChange={this.handleChange} />
                <br/>
                <label htmlFor="age">Enter Age</label>
                <input type="number" name="age" value={age} onChange={this.handleChange} />
                <br/>
                {this.state.editIndex===null?(
                    <input type="button" value="Submit" onClick={this.handleSubmit}
                disabled={!this.state.isValied} />
            ):(<input type="button" value="Update" onClick={this.handleUpdate} />)}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((usr,i)=>{
                        return(
                            <tr key={i}>
                                <td>{usr.Name}</td>
                                <td>{usr.email}</td>
                                <td>{usr.age}</td>
                                <td><button onClick={()=>{this.handleEdit(usr,i);}}>Edit</button></td>
                                <td><button onClick={()=>{this.handleDelte(usr,i);}}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}


}