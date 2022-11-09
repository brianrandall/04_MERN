import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Players = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/api/team')
            .then(res => setTeam(res.data))
            .catch(err => console.log(err))
    }, [team])

    const removePlayer = (id) => {
        axios.delete(`http://localhost:8001/api/team/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    



  return (
    <div className='bodyDiv'>
        <div className='header_linx'>
            <Link to = {''}>List</Link> | <Link to = {'/players/add_player'}>Add Player</Link>
            </div>
        <div className='tableDiv'>
            <table className="playerz">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.map((x, i) => {
                            return (
                                <tr key={i}>
                                    <td>{x.name}</td>
                                    <td>{x.position}</td>
                                    <td>
                                        <button onClick={() => removePlayer(x._id)} style={{ backgroundColor:'red', padding: '5px' }}>
                                            Delete
                                        </button>
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

export default Players