import React from 'react'

const RegisterForm = (props) => {
    const { addName, addLastName, onAddStudent } = props

    return (
        <form className="form">
            <label className="label">Name</label>
            <input className="input-form" onChange={addName} type="text" name="name" />
            <label className="label">Last name</label>
            <input className="input-form" onChange={addLastName} type="text" name="lastName" />
            <button className="buttons" onClick={onAddStudent}>Add student</button>
        </form>
    )
}

export { RegisterForm }