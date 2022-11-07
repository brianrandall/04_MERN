import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8002/api/products')
            .then(res => setProducts(res.data))
    }, [products])


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