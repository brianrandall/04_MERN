import axios from 'axios'
import React from 'react'

const Delete = (props) => {

  const deleteAuthor = () => {
    axios.delete(`http://localhost:8007/api/authors/${props.id}`)
      .then(res => {
        console.log(res)
      })
  }


  return (
    <div>
      <button type='button' onClick={deleteAuthor}>delete</button>
    </div>
  )
}

export default Delete