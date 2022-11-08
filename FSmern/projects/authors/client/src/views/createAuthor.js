import React, {useState} from 'react'
import axios from 'axios'
import Cancel from '../components/cancelButton'

const AuthorCreate = () => {

    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})
    const [existError, setExistError] = useState('')

    const createAuthor = e => {
        e.preventDefault()

        axios.post('http://localhost:8007/api/authors/new', {
            name
        })
        .then(res => console.log(res))
        .catch(err => {
            console.log(err.response.data)
            if ( typeof err.response.data === 'string') {
                setExistError(err.response.data)
            } else {
                setExistError('')
                setErrors(err.response.data.errors)
            }
        })
    }

  return (
    <div className='formDiv'>
        <form onSubmit = {createAuthor}>
            <p>
                <label>name</label>
            </p>
            <p>
                <input type='text' onChange={(e) => setName(e.target.value)}/>
                {errors.name ? <p style={{color:'red'}}>{errors.name.message}</p> : ''}
                {existError ? <p style={{color:'red'}}>{existError}</p> : ""}
            </p>
            
                <input type='submit'></input>
        </form>
        <Cancel />
    </div>
  )
}

export default AuthorCreate