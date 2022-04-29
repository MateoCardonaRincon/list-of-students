import React, { useState } from 'react'

import { RegisterForm } from './RegisterForm';
import { StudentsTable } from './StudentsTable';

const ListOfStudents = () => {

  const onAddStudent = (event) => {
    event.preventDefault();
    if (name && lastName) {
      const student = {
        name,
        lastName
      }
      setList([...list, student])
    }
  }

  const [list, setList] = useState([])

  const [name, setName] = useState('');

  const [lastName, setLastName] = useState('');

  const addName = (event) => {
    setName(event.target.value)
  }

  const addLastName = (event) => {
    setLastName(event.target.value)
  }


  return (
    <div className="container">
      <div className="row">
        <RegisterForm
          addName={addName}
          addLastName={addLastName}
          onAddStudent={onAddStudent} />
      </div>

      <div className="row">
        <StudentsTable list={list} setList={setList} />
      </div>

    </div >
  )
}

export default ListOfStudents
