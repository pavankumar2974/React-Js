import { Component } from "react";


export default class UserClass extends Component {
    constructor() {
        super();

        this.state = {
            fname: "",
            lname: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    addUser = () => {
        console.log(this.state);
    }

    render() {
        const { fname, lname } = this.state
        return (<div>
            <form action="">
                <label htmlFor="">First Name</label>
                <br />
                <input type="text" name="fname" value={fname} onChange={this.handleChange} />
                <br />
                <label htmlFor="">Last Name</label>
                <br />
                <input type="text" name="lname" value={lname} onChange={this.handleChange} />
                <br />
                <button type="button" onClick={this.addUser}>Add User</button>
            </form>
        </div>)
    }
}