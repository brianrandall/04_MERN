import React from 'react'
import { Link, Routes, Route} from 'react-router-dom'
import Table from '../components/authorTable'

const Main = () => {
  return (
    <div>
        <h2>Favorite Authors</h2>
        <Link to = {'/new'}>create new</Link>
        <p>we have quotes by...</p>
        <Table />
    </div>
  )
}

export default Main