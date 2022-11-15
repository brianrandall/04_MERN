import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NavBar = () => {

    const username = ''
    const num =15

    const categories = ['Appliances', 'Arts & Crafts', 'Books', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Camera & Photo Products', 'CDs & Vinyl', 'Cell Phones & Accessories', 'Clothing, Shoes & Jewelery', 'Computers & Accessories', 'Electronics', 'Gift Cards', 'Grocery', 'Home & Kitchen', 'Industrial & Scientific', 'Kitchen & Dining', 'Office Products', 'Patio, Lawn & Garden', 'Pet Supplies', 'Software', 'Sports & Outdoors', 'Tools & Home Improvement', 'Toys & Games', 'Video Games', ]
    console.log(categories);

  return (
    <div className='nav'>
        <img src='' alt='logo'/>
        <span>
            {username === '' ? 'Welcome Guest' : `Welcome ${username}`}
        </span>
        <div className='search'>
            <select>
                <option value=''>All</option>
                    {categories.map((category, i) => {
                    return (
                    <option key={i}>{category}</option>
                    )
                })}
            </select>
            <input type='text' placeholder='Search' className='navText'></input>
            <div className='navButton'>
            <img src={require('./img/search.png')} height='20px' />
            </div>
            
            
        </div>
        <div>
            Login 
        </div>
        <div>
            Orders
        </div>
        <div className='cartDiv'>
            <div className='cartNum'>{num}</div>
            <img src={require('./img/cart.png')} height='20px' width='30px' />
            <small>Cart</small>
        </div>

    </div>
  )
}

export default NavBar