import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const Table = () => {

    const [jobs, setJobs] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/jobs')
            .then(res => setJobs(res.data))
            .catch(err => console.log(err))
    }, [jobs])

    const deleteJob = (id) => {
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <Link to={'/jobs/new'}>Create New Job</Link>

        <div className='jobTable'>
            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Remote</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <Link to={`/jobs/view/${job._id}`}>{job.title}</Link>
                                    </td>
                                    <td>{job.company}</td>
                                    <td>{job.salary}</td>
                                    <td>{job.remote ? 'Yes' : 'No'}</td>
                                    <td>
                                        <Link to={`/jobs/edit/${job._id}`}>Edit</Link> | <Link to={'/'} onClick = {(e) => {deleteJob(job._id)}} >View</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Table