import React from "react";
import { useState } from "react";
import { use } from "react";

const Users = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [Users, setUsers] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault
        setUsers((prev) => [...prev.user])
        console.log(Users)
    }

    return (
        <div>
            <label htmlFor="">Fname</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} /><br />
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} /><br />
            <label htmlFor="">Phone</label>
            <input type="number" name="phone" value={user.phone} onChange={handleChange} /><br />
            <button type="submit" onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Users