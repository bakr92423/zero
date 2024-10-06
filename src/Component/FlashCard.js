import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Navigation, Pagination,Thumbs} from 'swiper/modules';
import { useCart } from 'react-use-cart';

const FlashCard = () => {
 const {addItem} =useCart()
  const [stat,usestat]=useState([])
  async function getallpro(){
    const {data}=await axios.get('http://localhost:8000/Products')
    usestat(data)
  }
  useEffect(()=>{
    getallpro()
  },[])
   
  
    
  return (
    <div className='FlashCard'>
        <div className='carts'>
          <Swiper modules={[Navigation,Autoplay]} slidesPerView={5} spaceBetween={20} loop={true} autoplay={{delay:6000}} navigation={true} 
          breakpoints={{
            1300 :{
              slidesPerView:5
            },
            1100 :{
              slidesPerView:4
            },
            800 :{
              slidesPerView:3.3
            },
            500 :{
              slidesPerView:2.5
            },
            300 :{
              slidesPerView:1.5
            },
            0 :{
              slidesPerView:1
            },
          }}>
          {stat.map((data,id)=>(
             <SwiperSlide>
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
             </SwiperSlide>
            

          ))}
           
          </Swiper>
       
          
        
        </div>
      
    </div>
  )
}

export default FlashCard
