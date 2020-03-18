import React, { useState } from 'react';

const DEFAULT_STATE = {
    name: '',
    role: '',
    email: ''
}

export default function Form (props) {

    const [formState, setFormState] = useState(DEFAULT_STATE);
    console.log(formState);

    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = event => {
        event.preventDefault();

        props.addTeamMember({
            ...formState,
            id: Date.now()
        });

        setFormState(DEFAULT_STATE);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Name</label> 
            <input 
                type="text"
                name="name"
                value={formState.name}
                onChange={changeHandler}
                placeholder="name namerson"
            />
            <label>Role</label> 
            <input 
                type="text"
                name="role"
                value={formState.role}
                onChange={changeHandler}
                placeholder="wainwright"
            />
            <label>Email</label> 
            <input 
                type="email"
                name="email"
                value={formState.email}
                onChange={changeHandler}
                placeholder="name@poop.pee"
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}