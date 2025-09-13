import { Component } from "react";

export default class SES extends Component {
  state = {
    user: {
      Name: "",
      age: "",
      id: "",
      course: "",
    },
    users: [],
    editIndex: null,
    isValid: true,
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
      age: "",
      id: "",
      course: "",
    };
    this.setState({ user: resetUser });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };

  handleDelete = (usr) => {
    const newUsers = this.state.users.filter((del) => del.id !== usr.id);
    this.setState({ users: newUsers });
  };

  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers, editIndex: null });
    this.handleReset();
  };

  render() {
    const { Name, age, id, course } = this.state.user;
    return (
      <div>
        <h1>
          <center>Student Enrollment System</center>
        </h1>
        <form>
          <label>Enter Name</label>
          <input type="text" name="Name" value={Name} onChange={this.handleChange} />
          <br />
          <label>Enter Age</label>
          <input type="number" name="age" value={age} onChange={this.handleChange} />
          <br />
          <label>Enter ID</label>
          <input type="text" name="id" value={id} onChange={this.handleChange} />
          <br />
          <label>Enter Course</label>
          <input type="text" name="course" value={course} onChange={this.handleChange} />
          <br />
          {this.state.editIndex === null ? (
            <input type="button" value="Submit" onClick={this.handleSubmit} disabled={!this.state.isValid} />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
        </form>

        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Id</th>
              <th>Course</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => (
              <tr key={i}>
                <td>{usr.Name}</td>
                <td>{usr.age}</td>
                <td>{usr.id}</td>
                <td>{usr.course}</td>
                <td>
                  <button onClick={() => this.handleEdit(usr, i)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.handleDelete(usr)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
