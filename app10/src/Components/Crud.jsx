import { Component } from "react";


export default class Crud extends Component{
     state = {
        user: {
            Name: "",
            Age: "",
            email: "",
            Id: "",
        },
        users: [],
        editIndex: null,
    };

    handleChange = (e) => {
        const inputName = e.target.name;
        const userEnteredValue = e.target.value;
        const newUser = { ...this.state.user };
        newUser[inputName] = userEnteredValue;
        this.setState({ user: newUser });
    };

    handleReset = () => {
        const resetUser = {
            Name: "",
            Age: "",
            email: "",
            Id: "",
        };
        this.setState({ user: resetUser, editIndex: null });
    };

    handleSubmit = () => {
        this.setState({
            users: [...this.state.users, this.state.user],
        });
        this.handleReset();
    };

    handleEdit = (usr, i) => {
        this.setState({ user: usr, editIndex: i });
    };

    handleDelete = (usr) => {
        const newUsers = this.state.users.filter(
            (del) => del.email !== usr.email
        );
        this.setState({ users: newUsers });
    };

    handleUpdate = () => {
        const newUsers = [...this.state.users];
        newUsers[this.state.editIndex] = this.state.user;
        this.setState({ users: newUsers, editIndex: null });
        this.handleReset();
    };

    render() {
        const { Name, Age, email } = this.state.user;
        return (
            <div>
                <form>
                    <label htmlFor="Name">Enter Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={Name}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="Age">Enter Age</label>
                    <input
                        type="number"
                        name="Age"
                        value={Age}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="email">Enter email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <br />
                    {this.state.editIndex === null ? (
                        <input
                            type="button"
                            value="Submit"
                            onClick={this.handleSubmit}
                        />
                    ) : (
                        <input
                            type="button"
                            value="Update"
                            onClick={this.handleUpdate}
                        />
                    )}
                </form>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr, i) => {
                            return (
                                <tr key={i}>
                                    <td>{usr.Name}</td>
                                    <td>{usr.Age}</td>
                                    <td>{usr.email}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.handleEdit(usr, i);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.handleDelete(usr);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
}

}