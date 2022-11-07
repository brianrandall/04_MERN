import React from 'react'
import Form from '../components/productForm'
import Products from './productList'

const Main = () => {
  return (
    <div>
        <h2>Product Manager</h2>
        <Form />
        <hr />
        Product List
        <Products />
    </div>
  )
}

export default Main