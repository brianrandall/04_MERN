import React, { useState, useEffect, useProps } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Delete from '../components/deleteButton'
import Cancel from '../components/cancelButton'

const ViewJob = () => {

    const {id} = useParams()

    const [job, setJob] = useState({})
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [salary, setSalary] = useState('')
    const [remote, setRemote] = useState(Boolean)

    const nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res => {
                setJob(res.data)
                setTitle(res.data.title)
                setCompany(res.data.company)
                setSalary(res.data.salary)
                setRemote(res.data.remote)
                console.log(remote);
            })
    }, [id])

  return (
    <div>
        <h4>
            view the job dot com job for view to job
        </h4>
        <h4>job title</h4>
        <h1>{job.title}</h1>
        <h4>job company</h4>
        <h2>{job.company}</h2>
        <h4>job salary</h4>
        <h3>{job.salary}</h3>
        <h4>is remote?</h4>
        <h3>
            {job.remote ? 'yes' : 'no'}
        </h3>


        <Delete />
        <Cancel />
        <button onClick={() => nav(`/jobs/edit/${id}`)}>Edit</button>


    </div>
  )
}

export default ViewJob