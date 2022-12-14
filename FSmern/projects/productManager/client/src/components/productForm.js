import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})
    const [existError, setExistErrors] = useState()

    const createProduct = e => {
        e.preventDefault();

            
        axios.post('http://localhost:8002/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response.data)
                if ( typeof err.response.data === 'string') {
                    setExistErrors(err.response.data)
                } else {
                    setExistErrors('')
                    setErrors(err.response.data.errors)
                }
            }
            )
        }

  return (
    <div>
        <form onSubmit={createProduct}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                {errors.title ? <p style={{color:'red'}}>{errors.title.message}</p> : ''}
                {existError ? <p style={{color:'red'}}>{existError}</p> : ""}
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