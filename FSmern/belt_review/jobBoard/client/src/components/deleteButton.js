import React, {useProps} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Delete = () => {
    const nav = useNavigate()
    const {id} = useParams()
    const deleteJob = () => {
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
            .then(res => {
                console.log(res)
                nav('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div>
       <button type='button' onClick={deleteJob}>Delete</button>
    </div>
  )
}

export default Delete