import { Component } from "react";


export default class Crud extends Component {
    state={
        User:{
            Name:"",
            email:"",
            age:"",
        },
        
        Users:[],
        editIndex:null,
    };
    handleChange=(e)=>{
        const inputName = e.target.name;
        const userEnteredValue=e.target.value;
        const newUser={...this.state.User};
        newUser[inputName]=userEnteredValue;
        this.setState({User:newUser});
    };
    handleSubmit=()=>{
        const newUsers=[...this.state.Users];
        newUsers.push(this.state.User);
        this.setState({Users:newUsers});
        this.handleReset();
    };
    handleReset=()=>{
        const resetUser={
            Name:"",
            email:"",
            age:"",
        };
        this.setState({User: resetUser});
    };
    handleEdit=(Usr, i)=>{
        this.setState({User:Usr ,editIndex:i});
    };
    handleDelete=(Usr)=>{
        const newUsers=this.state.Users.filter((del)=>{
            return del.email !== Usr.email;
        });
        this.setState({Users:newUsers});
    };
    handleUpdate=()=>{
        const newUsers=[...this.state.Users];
        newUsers[this.state.editIndex]=this.state.User;
        this.setState({Users:newUsers,editIndex:null});
        this.handleReset();
    };

    render() {
        const{Name,email,age}=this.state.User;
        return (
            <div>
                <form>
                    <label htmlFor="Name">Enter Name:</label>
                    <input type="text" name="Name" value={Name} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="email">Enter Email:</label>
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="age">Enter Age:</label>
                    <input type="number" name="age" value={age} onChange={this.handleChange} />
                    <br />
                    {this.state.editIndex===null?(
                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                    ):(
                        <input type="button" value="Update" onClick={this.handleUpdate} />
                    
                    )}
                </form>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            
                        </tr >
                    </thead>
                    <tbody>
                        {this.state.Users.map((usr,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{usr.Name}</td>
                                    <td>{usr.email}</td>
                                    <td>{usr.age}</td>
                                    <td><button onClick={()=>{
                                        this.handleEdit(usr, i);
                                    }}>Edit</button></td>
                                    <td><button onClick={()=>{
                                        this.handleDelete(usr);
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