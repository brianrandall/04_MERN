import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})

    const createProduct = e => {
        e.preventDefault();

        axios.get('http://localhost:8002/api/products/title/' + title)
            .then(res => console.log(res.data.title))
            
        axios.post('http://localhost:8002/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => {
                setErrors(err.response.data.errors)
            }
            )
        }

  return (
    <div>
        <form onSubmit={createProduct}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                {errors.title ? <p style={{color:'red'}}>{errors.title.message}</p> : ''}
            </p>
            <p>
                <label>Price</label><br />
                $<input type="number" onChange={(e) => setPrice(e.target.value)} />
                {errors.price ? <p style={{color:'red'}}>{errors.price.message}</p> : ''}
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
                {errors.description ? <p style={{color:'red'}}>{errors.description.message}</p> : ''}
            </p>
            <input type="submit" />
        </form>

    </div>
  )
}

export default Form