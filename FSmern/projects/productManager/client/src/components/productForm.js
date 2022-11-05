import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})

    const createProduct = e => {
        e.preventDefault();
        axios.post('http://localhost:8005/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
        }




  return (
    <div>
        <form onSubmit={createProduct}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                {
                    errors.title ?
                        <span>{errors.title.message}</span> :
                        ''
                }
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                {
                    errors.price ?
                        <span>{errors.price.message}</span> :
                        ''
                }
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                {
                    errors.description ?
                        <span>{errors.description.message}</span> :
                        ''
                }
            </p>
            <input type="submit" />
        </form>

    </div>
  )
}

export default Form