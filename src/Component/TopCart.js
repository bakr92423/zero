import React from 'react'
import Tdata from './Tdata'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination,Thumbs} from 'swiper/modules';





const TopCart = () => {
  return (
    <div className='topcart'>
      <div className='titile'>
        <p><i class="fa-solid fa-table-cells"></i>top categories</p>
        <p>view all <i class="fa-solid fa-play"></i></p>
      </div>
      <div className='parenttopcart'>

      <Swiper modules={[Navigation,Autoplay]} slidesPerView={4} spaceBetween={10} loop={true} >
      {Tdata.map((value,id)=>{
        return(
          <SwiperSlide>
              <div className='topproduct'>
              <div className='img'>
                <img src={value.img} alt='' />
                <p className='name'>{value.name}</p>
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

export default TopCart
