import React, {useState} from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const SWapi = () => {
    const {api, id} = useParams('')

    const [stuff, setStuff] = useState({})
    const [world, setWorld] = useState ('')

    const [worldID, setWorldID] = useState(null)

    axios.

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${api}/${id}`)
            .then(response => {setStuff(response.data)})
            console.log(stuff)
            if (api === 'people') {
                axios.get(stuff.homeworld)
                .then(response => {
                    setWorldID(stuff.homeworld.substr(31))
                    console.log(response.data.name)
                    setWorld(response.data.name)})                    
            }
    }, [api, id] )


  return (
    <div>
       <h1> { api === 'people' ? 
         `${stuff.name}`
         
        : `${stuff.name}`
    
        }
    </h1>
    { api === 'people' ? 
        <div>
            
            <h4>height: </h4> {stuff.height}
            <h4>weight: </h4> {stuff.mass}
            <h4>hair color: </h4> {stuff.hair_color}
            <h4>skin color: </h4> {stuff.skin_color}
            <h4>homeworld: </h4> <Link to= {'/planets/' +worldID}>   {world} </Link>

         </div>
        : 
        <div>
            
            <h4>climate</h4> {stuff.climate}
            <h4>terrain</h4> {stuff.terrain}
            <h4>surface water</h4> {stuff.surface_water}
            <h4>population</h4> {stuff.population}
            
        </div>
        }
    </div>
  )
}

export default SWapi