import React, { useEffect, useState } from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import Cancel from '../components/cancelButton'
import Delete from '../components/deleteButton'


const EditJob = () => {

    const {id} = useParams()
    const [job, setJob] = useState({})
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [salary, setSalary] = useState('')
    const [remote, setRemote] = useState(false)
    const [errors, setErrors] = useState({})
    const [existError, setExistError] = useState('')

    const nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res => {
                setJob(res.data)
                setTitle(res.data.title)
                setCompany(res.data.company)
                setSalary(res.data.salary)
                setRemote(res.data.remote)
            })
        }, [id])

    const updateJob = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/jobs/${id}`, {
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
            edit job dot com jobs to edit for job
        </h4>
        <div className='form'>
            <form onSubmit={ updateJob }>
                <p>
                    <label>Job Title</label><br />
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {errors.title ? <p className='error-text'>{errors.title.message}</p> : ''}
                    {existError ? <p className='error-text'>{existError}</p> : ''}
                </p>
                <p>
                    <label>Company</label><br />
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                    {errors.company ? <p className='error-text'>{errors.company.message}</p> : ''}
                </p>
                <p>
                    <label>Salary</label><br />
                    <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    {errors.salary ? <p className='error-text'>{errors.salary.message}</p> : ''}
                </p>
                <p>
                    <label>Remote</label><br />
                    <input type="checkbox" checked={remote} onChange={(e) => setRemote(e.target.checked)} />
                    </p>
                <p>
                    <input type="submit" value="Update Job" />
                    <Cancel />
                    <Delete />
                </p>
            </form>
        </div>
    </div>
  )
}

export default EditJob