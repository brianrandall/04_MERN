import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link } from 'react-router-dom'
import Cancel from '../components/cancelButton'

const NewJob = () => {

    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [salary, setSalary] = useState('')
    const [remote, setRemote] = useState(false)
    const [errors, setErrors] = useState({})
    const [existError, setExistError] = useState('')

    const nav = useNavigate()

    const createJob = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/jobs', {
            title,
            company,
            salary,
            remote
            })
            .then(res => {
                console.log(res)
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
        <h4>
            job dot com jobs new job for job man you
        </h4>
        <div className='form'>
            <form onSubmit={ createJob }>
                <p>
                    <label>Job Title</label><br />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    {errors.title ? <p className='error-text'>{errors.title.message}</p> : ''}
                    {existError ? <p className='error-text'>{existError}</p> : ''}
                </p>
                <p>
                    <label>Company</label><br />
                    <input type="text" onChange={(e) => setCompany(e.target.value)} />
                    {errors.company ? <p className='error-text'>{errors.company.message}</p> : ''}
                </p>
                <p>
                    <label>Salary</label><br />
                    <input type="number" onChange={(e) => setSalary(e.target.value)} />
                    {errors.salary ? <p className='error-text'>{errors.salary.message}</p> : ''}
                </p>
                <p>
                    <label>Remote</label><br />
                    <input type="checkbox" onChange={(e) => setRemote(e.target.checked)} />
                </p>
                <p>
                    <input type='submit' /><Cancel />
                </p>
            </form>

        </div>

    </div>
  )
}

export default NewJob