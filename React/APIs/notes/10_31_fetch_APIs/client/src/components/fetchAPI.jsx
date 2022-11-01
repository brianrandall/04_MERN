import React, {useState} from 'react'

const FetchAPI = () => {

    const [pokemon, setPokemon] = useState([])

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1154")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results);
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    }
  return (
    <div>
        <h2>fetch api</h2>
        <button onClick={fetchData}>get pokemon</button>

        {
        pokemon.map((p, i) => {
            return (
            <div key={i}>
                {p.name}
            </div>
        )})
        }

    </div>
  )
}

export default FetchAPI