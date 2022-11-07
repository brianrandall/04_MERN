import React, { useEffect, useState } from 'react'
import { redirect, useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Update = () => {

    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})
    const nav = useNavigate()

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
            .then(res => nav(`/${id}`))
            .catch(err => {
                setErrors(err.response.data.errors)
            })
            
        }

  return (
    <div>
        <h2>Update Product Info</h2>
        <form onSubmit={updateProduct}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                {errors.title ? <p style={{color:'red'}}>{errors.title.message}</p> : ''}
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                {errors.price ? <p style={{color:'red'}}>{errors.price.message}</p> : ''}
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                {errors.description ? <p style={{color:'red'}}>{errors.description.message}</p> : ''}
            </p>
            <input type="submit"/>
            
        </form>
    </div>
  )
}

export default Update