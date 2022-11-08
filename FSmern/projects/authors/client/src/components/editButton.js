import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = (props) => {
  const nav = useNavigate()
  const editAuthorPage = () => {
  nav(`/edit/${props.id}`)
  }

  return (
    <div>
      <button type='button' onClick={editAuthorPage} >edit</button>
    </div>
  )
}

export default Edit