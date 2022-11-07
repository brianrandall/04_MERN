import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, Routes, Route } from 'react-router-dom'
import Delete from '../components/deleteButton'

const Product = () => {

    const {id} = useParams()

    const [product, setProduct] = useState({})

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8002/api/products/' + productId)
            .then(res => {
                console.log(res)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8002/api/products/' + id)
            .then(res => {
                setProduct(res.data)
            })
    }, [id])



  return (
    <div> 
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>

        <hr/>

        // <Link to = {`/`} > back </Link> // 
        <Link to = {`/edit/${product._id}`} > edit </Link> // 
        <Link to = {`/`} onClick = {(e) => {deleteProduct(product._id)}}> delete </Link> //
        <p>ugly delete button cuz it's part of the project <Link to = {'/'} > <Delete/> </Link> </p>
    </div>
  )
}

export default Product