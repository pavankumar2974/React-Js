import { Component } from "react";

export default class Crud extends Component {
  state = {
    user: {
      Name: "",
      email: "",
      age: "",
    },

    users: [],
    editIndex: null,
    isValid: false,
  };

  checkValidation = () => {
    let checkform = true;
    for (let a in this.state.user) {
      if (this.state.user[a] === "") {
        checkform = false;
      }
    }
    this.setState({ isValid: checkform });
  };

  handleChange = (e) => {
    const inputName = e.target.name;
    const userEnteredValue = e.target.value;
    const newUser = { ...this.state.user };
    newUser[inputName] = userEnteredValue;
    this.setState({ user: newUser }, this.checkValidation);
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
      email: "",
      age: "",
    };
    this.setState({ user: resetUser, isValid: false });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };

  handleDelete = (usr) => {
    const newUsers = this.state.users.filter((del) => {
      return del.email !== usr.email;
    });
    this.setState({ users: newUsers });
  };

  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers, editIndex: null });
    this.handleReset();
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="Name">Enter Name</label>
          <input
            type="text"
            name="Name"
            value={this.state.user.Name}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="age">Enter Age</label>
          <input
            type="number"
            name="age"
            value={this.state.user.age}
            onChange={this.handleChange}
          />
          <br />

          {this.state.editIndex === null ? (
            <input
              type="button"
              value="Submit"
              onClick={this.handleSubmit}
              disabled={!this.state.isValid}
            />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.Name}</td>
                  <td>{usr.email}</td>
                  <td>{usr.age}</td>
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
                        this.handleDelete(usr, i);
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
