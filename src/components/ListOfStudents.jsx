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
      console.log(name)
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
    <div>
      <RegisterForm
        addName={addName}
        addLastName={addLastName}
        onAddStudent={onAddStudent} />

      <StudentsTable list={list} setList={setList} />
    </div>
  )
}

export default ListOfStudents
