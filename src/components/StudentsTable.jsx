import React from 'react'

const StudentsTable = (props) => {
  const { list, setList } = props

  const deleteStudent = (event, index) => {
    event.preventDefault()
    let filteredList = list.filter((value, ind) => ind !== index)
    setList(filteredList)
  }

  return (
    <div>
      <table id="table" className="table">
        <thead>
          <tr key="theader"><th>Name</th><th>Last name</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {list.map((student, index) => <tr id={`tr-${index}`} key={index}>
            <td>{student.name}</td>
            <td>{student.lastName}</td>
            <td>
              <button className="delete-button"
                onClick={(e) => { deleteStudent(e, index) }}
                type="button">✖</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export { StudentsTable }