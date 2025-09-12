import { Component } from "react";

export default class CrudValidation extends Component {
  state = {
    user: {
      Name: "",
      age: "",
      email: "",
    },
    users: [],
    editIndex: null,
  };

  handleChange = (e) => {
    const inputName = e.target.name;
    const userEnteredValue = e.target.value;
    const newuser = { ...this.state.user };
    newuser[inputName] = userEnteredValue;
    this.setState({ user: newuser });
  };

  handleSubmit = () => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    this.handleReset();
  };

  handleReset = () => {
    const resetUser = {
      Name: "",
      age: "",
      email: "",
    };
    this.setState({ user: resetUser });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };

  handleDelete = (usr) => {
    const newUsers = this.state.users.filter((del) => del.email !== usr.email);
    this.setState({ users: newUsers }); // ✅ fixed: was {user:newUsers}
  };

  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers, editIndex: null });
    this.handleReset();
  };

  render() {
    const { Name, age, email } = this.state.user;

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

          <label htmlFor="age">Enter Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />

          {this.state.editIndex === null ? (
            <input type="button" value="Submit" onClick={this.handleSubmit} />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
        </form>

        <table border={3}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.Name}</td>
                  <td>{usr.age}</td>
                  <td>{usr.email}</td>
                  <td>
                    <button onClick={() => this.handleEdit(usr, i)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(usr)}>Delete</button>
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
