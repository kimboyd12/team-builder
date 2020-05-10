import React, { useState } from "react";

const MemberForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    //   setting the state to an object

    const changeHandler = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };
    // copies key/value pairs from old object to new

    const submitHandler = event => {
        event.preventDefault();
        props.addMember(member)
        setMember({ name: "", email: "", role: ""});
    }
    // onSubmit this will stop page from reloading(preventDefault), will add a member on submit, resets fields to empty strings upon submit

    return (
        <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
            id="name"
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={member.name}
            onChange={changeHandler}
        />

        <label htmlFor="email">Email:</label>
        <input 
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={member.email}
            onChange={changeHandler}
        />

        <label htmlFor="role">Role:</label>
        <input 
            id="role"
            type="text"
            name="role"
            placeholder="What is your role?"
            value={member.role}
            onChange={changeHandler}
        />

        <button type="submit">Click To Submit!</button>
        </form>
    )

}

export default MemberForm;