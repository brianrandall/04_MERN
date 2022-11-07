import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const Delete = () => {

    const {id} = useParams('')

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8002/api/products/${id}`)
            .then(res => {
                console.log(res)
            })
    }

  return (
    <div>
        <button onClick = {deleteProduct}> delete </button>
    </div>
  )
}

export default Delete