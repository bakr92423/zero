import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const Open=function(){
    const o=document.querySelector('.menu')
    const p=document.querySelector('.links')
    o.addEventListener('click',function(){
      p.classList.toggle('active')




    })
    
    

  }
  const Closse=function(){
    const x=document.querySelector('.closse')
    const p=document.querySelector('.links')
    x.addEventListener('click',function(){
      p.classList.remove('active')




    })
    
    

  }

  return (
    <div className='heade-nav'>
       
      <div  className='drop '>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>
      <div className='links'>
        <div className='closse' onClick={()=>Closse()}  ><i class="fa-solid fa-xmark"></i></div>
        <Link to=''>Home</Link>
        <Link to='/Pages'>Pages</Link>
        <Link to='/User'>User Account</Link>
        <Link to='/Vender'>Vender Account</Link>
        <Link to='/Trock'>Trock My Order</Link>
        <Link to='/Contact'>Contact</Link>
       
      </div>
      <div className='menu' onClick={()=>Open()}><i class="fa-solid fa-bars"></i></div>
      
    </div>
  )
}

export default Navbar
