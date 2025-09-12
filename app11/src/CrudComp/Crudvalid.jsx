import { Component } from "react";

export default class Crudvalid extends Component {
  state = {
    user: {
      Name: "",
      id: "",
      email: "",
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
    console.log(newUser);
  };

  handleSubmit = () => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers }); // ✅ fixed: was {user:newUsers}
    this.handleReset();
  };

  handleReset = () => {
    const resetUser = {
      Name: "",
      id: "",
      email: "",
    };
    this.setState({ user: resetUser });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };

  handleDelete = (usr) => {  // ✅ fixed: was handleDelte
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
    const { Name, id, email } = this.state.user;

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
          <label htmlFor="id">Enter ID</label>
          <input
            type="text"
            name="id"
            value={id}
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
            <input
              type="button"
              value="Submit"            // ✅ fixed: was {submit} (undefined)
              onClick={this.handleSubmit}
            />
          ) : (
            <input
              type="button"
              value="Update"            // ✅ fixed: was {Update} (undefined)
              onClick={this.handleUpdate}
            />
          )}
        </form>

        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
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
                  <td>{usr.id}</td>
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
