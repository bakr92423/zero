import React from 'react'
import ShopProduct from '../Component/DataShop'
import { useCart } from 'react-use-cart'


const Shope = () => {
    const{addItem}=useCart()
    const catshop=[
        {
            catimg:'/logo192.png',
            catname:'apple'
        },
            {
            catimg:'/logo192.png',
            catname:'samasung'
        },
            {
            catimg:'/logo192.png',
            catname:'oppo'
        },
            {
            catimg:'/logo192.png',
            catname:'redimi'
        },
            {
            catimg:'/logo192.png',
            catname:'infinix'
        },
            {
            catimg:'/logo192.png',
            catname:'sony'
        },
            {
            catimg:'/logo192.png',
            catname:'headPhones'
        },
            {
            catimg:'/logo192.png',
            catname:'freePods'
        },
    
    ]
    const ShopPro=[
        {
            "id":1,
            "name":"freebuds",
            "price":100,
            "img":"/img/arrival 5.jpg"
         },
         {
            "id":2,
            "name":"apple plus",
            "price":200,
            "img":"/img/shop 1.jpg"
         },
         {
            "id":3,
            "name":"headPhones & ps4",
            "price":500,
            "img":"/img/shop 3.jpg"
         },
         {
            "id":4,
            "name":"samsung a13 ",
            "price":200,
            "img":"/img/shop 15.png"
         },
         {
            "id":5,
            "name":"headphone h2031d",
            "price":30,
            "img":"/img/shop 5.jpg"
         },
         {
            "id":6,
            "name":"freebuds 6i",
            "price":600,
            "img":"/img/shop 7.jpg"
         },
         {
            "id":7,
            "name":"redmi a63",
            "price":300,
            "img":"/img/shop 8.jpg"
         },
         {
            "id":8,
            "name":"apple",
            "price":250,
            "img":"/img/shop 10.jpg"
         },
         {
            "id":8,
            "name":"redmi13",
            "price":650,
            "img":"/img/shop 19.png"
         },
         {
            "id":9,
            "name":"sony",
            "price":450,
            "img":"/img/shop 18.png"
         },
         {
            "id":10,
            "name":"infinix",
            "price":800,
            "img":"/img/shop 17.png"
         },
         {
            "id":11,
            "name":"samasung a14",
            "price":700,
            "img":"/img/shop 16.png"
         },
         
    ]
  return (
    <div className='shop'>
        <div className='categoryshop'>
        {catshop.map((value,index)=>{
            return(
                <div>

                <div className='box'>
                    <img src={value.catimg} alt=''/>
                    <span>{value.catname}</span>

                    </div>
                
             </div>
            )
        })}
        </div>
        <div className='shopparent'>
            <div className='titalshop'>
                <p>mobail phones</p>
                <p>view all <i class="fa-solid fa-play"></i></p>
            </div>
            <div className='shopproductparent'>
            {ShopPro.map((data,id)=>(
                 <div className='cart'>
                 <div className='img'> 
                    <img src={data.img} alt=''/>
                 </div>
                 <div className='icon'><i class="fa-solid fa-heart"></i></div>
                 <h3 className='name'>{data.name}</h3>
                 <div className='star'>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                 </div>
                    
                 <div className='text'>
                      <p className='price'>${data.price}</p>
     
                    <button onClick={(id)=>addItem(data)}>+</button>
                 </div>
                 
                 </div>
                

            ))}
            
            </div>


           
         
        
         

        </div>

      
    </div>
  )
}

export default Shope
