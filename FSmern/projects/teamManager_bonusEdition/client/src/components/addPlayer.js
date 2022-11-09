import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddPlayer = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [errors, setErrors] = useState([]);
    const [existError, setExistError] = useState('');

    const nav = useNavigate();

    const addPlayer = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8001/api/team', {
            name,
            position
        })
            .then(res => {
                console.log(res)
                nav('/players/list')
            })
            .catch(err => {
                console.log(err)
                if (typeof err.response.data === 'string') {
                    setExistError(err.response.data)
                } else {
                    setErrors(err.response.data.errors)
                }
            })
    }


    return (
        <div className='bodyDiv'>
            <div className='header_linx'>
                <Link to={'/players/list'}>List</Link> | <Link to={''}>Add Player</Link>
            </div>
            <div className='tableDiv'>
                <form onSubmit={addPlayer}>
                    <p>
                        <label>Player Name:</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                        {errors.name ? <p style={{ color: 'red' }}>{errors.name.message}</p> : ''}
                        {existError ? <p style={{ color: 'red' }}>{existError}</p> : ""}
                    </p>
                    <p>
                        <label>Preferred Position:</label>
                        <input type="text" onChange={(e) => setPosition(e.target.value)} />
                        {errors.position ? <p style={{ color: 'red' }}>{errors.position.message}</p> : ''}
                    </p>
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        </div>
    )
}

export default AddPlayer