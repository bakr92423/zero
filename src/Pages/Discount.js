import React from 'react'
import DiscountPro from '../DataDiscount'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination,Thumbs} from 'swiper/modules';

const Discount = () => {
  return (
    <div className='topcart discount' >
    <div className='titile'>
      <p><i class="fa-solid fa-gift"></i>big discount</p>
      <p>view all <i class="fa-solid fa-play"></i></p>
    </div>
    <div className='parenttopcart discount'>

    <Swiper modules={[Navigation,Autoplay]} slidesPerView={5} spaceBetween={20} loop={true} >
    {DiscountPro.map((value,id)=>{
      return(
        <SwiperSlide>
            <div className='topproduct dispro'>
            <div className='img'>
              <img src={value.img} alt='' />
              <p className='name'>{value.name}</p>
              <p className='price'>${value.price}</p>
            </div>
          </div>
          </SwiperSlide>


)
})}


    </Swiper>
</div>
    
    
  </div>
      
    
  )
}

export default Discount
