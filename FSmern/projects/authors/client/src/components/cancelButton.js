import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const Cancel = () => {

    const nav = useNavigate()

    const goHome = () => {
    nav('/')
    }


  return (
    <div>
        <button type='button' onClick={goHome}>Cancel</button>
    </div>
  )
}

export default Cancel