import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, Routes, Route } from 'react-router-dom'

const Product = () => {

    const {id} = useParams()

    const [product, setProduct] = useState({})


    useEffect(() => {
        axios.get('http://localhost:8005/api/products/' + id)
            .then(res => {
                setProduct(res.data)
            })
    }, [])



  return (
    <div> 
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>

        <hr/>

        <Link to = {`/`} > back </Link>

    </div>
  )
}

export default Product