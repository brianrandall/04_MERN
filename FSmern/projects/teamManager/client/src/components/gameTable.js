import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Games = () => {
    const { num } = useParams();

    const nav = useNavigate();

    const [game, setGame] = useState([]);
    const [status, setStatus] = useState([]);
    const [team, setTeam] = useState([]);
    const [numOfGames, setNumOfGames] = useState('');
    // const [playerID, setPlayerID] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8001/api/game')
            .then(res => {
                setGame(res.data)
                setNumOfGames(res.data.length)
                console.log(numOfGames)
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:8001/api/team')
            .then(res => setTeam(res.data))
            .catch(err => console.log(err))
    }, [])

    const addGame = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8001/api/game', {
            number: numOfGames + 1
        })
            .then(res => {
                console.log(res)
                setGame([...game, res.data])
                nav('/status/game/' +num)
            })
            .catch(err => console.log(err))
    }

    const addStatus = (playerID) => {
        // e.preventDefault();
        axios.put('http://localhost:8001/api/team/' + playerID, 
        {
            $push: {
                game: {num},
                status: {status}
            }
        },  {new: true, useFindAndModify: true}
        )
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='bodyDiv'>
            <h1>
                Player Status - Game {num}
            </h1>
            <div className='gameStuff'>
                <h3> {game.map((x, i) => {
                    return (
                        <span key={i}>
                            | <Link to={`/status/game/${x.number}`}> Game {x.number} </Link>| </span>
                    )
                })}
                </h3>
                <button onClick={addGame}>Add Game</button>
            </div>
            <div className='tableDiv'>
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.map((x, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            {x.name}
                                        </td>
                                        <td>
                                            <button onClick={ () => {
                                                setStatus('Playing')
                                                // setPlayerID(x._id)
                                                addStatus(x._id)
                                            }} style={{padding: '5px'}}>
                                                Playing</button>
                                            <button style={{padding: '5px'}}>
                                            Not Playing
                                                </button>
                                            <button style={{ backgroundColor: 'yellow', padding: '5px' }}>
                                            Undecided
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

export default Games