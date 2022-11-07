import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, Routes, Route } from 'react-router-dom'

const Update = () => {

    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8002/api/products/' + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, [id])


    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8002/api/products/edit/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response.data.errors)
            })
        }


  return (
    <div>
        <h2>Update Product Info</h2>
        <form onSubmit={updateProduct}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <Link to = {`/`} > <input type="submit" /> </Link>
            
        </form>
    </div>
  )
}

export default Update