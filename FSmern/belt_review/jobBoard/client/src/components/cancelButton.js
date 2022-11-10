import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cancel = () => {


    const nav = useNavigate()

    const goHome = () => {
        nav('/')
    }

  return (
    <div>
    <button onClick={goHome}>Cancel</button>
    </div>
  )
}

export default Cancel