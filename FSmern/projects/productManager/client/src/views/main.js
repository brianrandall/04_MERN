import React from 'react'
import Form from '../components/productForm'
import Products from './productList'

const Main = () => {
  return (
    <div>
        Product Manager
        <Form />
        <hr />
        Product List
        <Products />
    </div>
  )
}

export default Main