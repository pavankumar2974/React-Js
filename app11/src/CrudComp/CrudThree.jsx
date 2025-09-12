import { Component } from "react";


export default class CrudThree extends Component{
    state={
        user:{
            Name:"",
            age:"",
        },

        users:[],
        editIndex:null,
       
    };
    handleChange=(e)=>{
        const inputName=e.target.name;
        const UserEnteredValue=e.target.value;
        const newUser ={...this.state.user};
        newUser[inputName]=UserEnteredValue;
        this.setState({user:newUser})
        // console.log(newUser);
    }
    handleSubmit=()=>{
        const newUsers=[...this.state.users];
        newUsers.push(this.state.user);
        this.setState({users:newUsers});
        this.handleReset();
    }
    handleReset=()=>{
        const resetUser={
            Name:"",
            age:"",
        };
        this.setState({user:resetUser});
    };
    handleEdit=(usr,i)=>{
        this.setState({user:usr,editIndex:i});
    };
    handleDelete=(usr)=>{
        const newUsers=this.state.users.filter((del)=>{
            return del.Name!==usr.Name;
        });
        this.setState({users:newUsers});
    };
    handleUpdate=()=>{
        const newUsers=[...this.state.users];
        newUsers[this.state.editIndex]=this.state.user;
        this.setState({users:newUsers,editIndex:null});
        this.handleReset();
    }
    render(){
        const{Name,age}=this.state.user;
        return(
            <div>
                <form>
                    <label htmlFor="Name" >Enter Name</label>
                    <input type="text" name="Name" value={Name} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="age" >Enter Age</label>
                    <input type="number" name="age" value={age} onChange={this.handleChange} />
                    <br/>
                    {this.state.editIndex===null?(
                        <input type="button" value="submit" onClick={this.handleSubmit} />
                    ):(
                        <input type="button" value="Update" onClick={this.handleUpdate} />
                    )}
                </form>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{usr.Name}</td>
                                    <td>{usr.age}</td>
                                    <td><button onClick={()=>{
                                        this.handleEdit(usr,i);
                                    }}>Edit</button></td>
                                    <td><button onClick={()=>{
                                        this.handleDelete(usr,i);
                                    }}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}