import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Search = () => {
  const {
    totalUniqueItems
  }=useCart()
  
  return (
    <div className='search'>
        <div className='logo'>ZID</div>
        <div className='input-search'><input type='search'  /><button>all category</button></div>
        <div className='icon'>
        <i class="fa-solid fa-user"></i>
        <Link to='/Cart'><i class="fa-solid fa-cart-plus"><span>{totalUniqueItems} </span></i></Link>
        </div>
      
    </div>
  )
}

export default Search
