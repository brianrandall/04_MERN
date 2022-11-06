import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8005/api/products')
            .then(res => setProducts(res.data))
    }, [])

  return (
    <div>
        {products.map((product, idx) => {

            return (
                <p key={idx}>
                    <Link to = {`${product._id}`}> 
                        {product.title} 
                    </Link> 
                </p>
                )
        })}

    </div>
  )
}

export default Products