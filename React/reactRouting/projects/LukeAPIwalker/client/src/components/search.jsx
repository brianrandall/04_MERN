import React, {useState} from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [apiName, setApiName] = useState([])
    const [id, setID] = useState([])

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/${apiName}/${id}`)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            
                Search for: 
                <select onChange={(e) => setApiName(e.target.value)}>
                    <option hidden>
                        ----
                    </option>
                    <option value= 'people'>
                        people
                    </option>
                    <option value= 'planets'>
                        planets
                    </option>
                </select>
                <input type = 'number' onChange={(e) => setID(e.target.value)} />
                <button value ='search' type='submit'>Search</button>

                </form>
            
    </div>
  )
}

export default Search