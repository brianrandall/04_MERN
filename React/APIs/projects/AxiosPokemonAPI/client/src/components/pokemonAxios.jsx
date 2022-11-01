import React, {useState} from 'react'
import axios from 'axios'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                console.log(response.data.results)
                setPokemon(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })

    }

  return (
    <div>

        <button onClick={getPokemon}>fetch pokemon axiosly</button>

        {
        pokemon.map((p, i) => {
            return (
                <div key={i}>
                    {p.name}
                </div>
            )
        })}
    </div>
  )
}

export default Pokemon