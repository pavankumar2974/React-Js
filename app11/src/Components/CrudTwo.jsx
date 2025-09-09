import { Component } from "react";

export default class CrudTwo extends Component {
  state = {
    user: {
      Name: "",
      ID: "",
    },
    users: [],
    editIndex: null,
    isValied: true, 
  };

  handleChange = (e) => {
    const inputName = e.target.name;
    const userEnteredValue = e.target.value;
    const newUser = { ...this.state.user };
    newUser[inputName] = userEnteredValue;
    this.setState({ user: newUser });
  };

  handleSubmit = () => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    this.handleReset();
    console.log(newUsers);
  };

  handleReset = () => {
    const resetUser = {
      Name: "",
      ID: "",
    };
    this.setState({ user: resetUser });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };

  handleDelete = (usr) => {
    const newUsers = this.state.users.filter((del) => {
      return del.ID !== usr.ID; 
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
    const { Name, ID } = this.state.user;
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
          <label htmlFor="ID">Enter ID</label>
          <input
            type="text"
            name="ID"
            value={ID}
            onChange={this.handleChange}
          />
          <br />
          {this.state.editIndex === null ? (
            <input
              type="button"
              value="Submit"
              onClick={this.handleSubmit}
              disabled={!this.state.isValied}
            />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
        </form>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.Name}</td>
                  <td>{usr.ID}</td>
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
