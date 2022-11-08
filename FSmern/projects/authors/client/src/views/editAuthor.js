import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Cancel from '../components/cancelButton'

const AuthorEdit = () => {

  const { id } = useParams()
  const [name, setName] = useState('')
  const [errors, setErrors] = useState([])
  const [existError, setExistError] = useState('')

  const nav = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8007/api/authors/' + id)
      .then(res => setName(res.data.name))
      .catch(err => console.log(err))
  }, [id])

  const updateAuthor = e => {
    e.preventDefault()

    axios.put('http://localhost:8007/api/authors/edit/' + id, {
      name
    })
      .then(res => {console.log(res)
      nav('/')
    })
      .catch(err => {
        console.log(err.response.data)
        if (typeof err.response.data === 'string') {
          setExistError(err.response.data)
        } else {
          setExistError('')
          setErrors(err.response.data.errors)
        }
      })
  }



  return (
    <div>
      <form onSubmit={updateAuthor}>
        <p>
          <label>name</label>
        </p>
        <p>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name ? <p style={{ color: 'red' }}>{errors.name.message}</p> : ''}
          {existError ? <p style={{ color: 'red' }}>{existError}</p> : ""}
        </p>
        <div className='formButtons'>
          <Cancel /> <input type='submit' />
        </div>
      </form>
    </div>
  )
}

export default AuthorEdit