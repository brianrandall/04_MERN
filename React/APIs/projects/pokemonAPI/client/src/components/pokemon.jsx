import React, {useState} from 'react'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(response.results)
                console.log(response);
            })
            .catch(err => {
                console.log(err)
            })

    }

  return (
    <div>
        <h2>
            Pokemon are for children. Here are 807 of them
        </h2>

        <button onClick={getPokemon}>click here for pokemon</button>

        {pokemon.map((p, i) => {
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