import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay, Navigation, Pagination,Thumbs} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const SlideCart = () => {
  return (
    <div  className='SlideCart'>
       <Swiper 
      modules={[Navigation, Pagination,Thumbs, Autoplay] }
      spaceBetween={60}
      slidesPerView={1}
      pagination={true}
      autoplay={{delay:6000}}
      scrollbar={{ draggable: true }} loop={true}  >
        <SwiperSlide>  <div className='swiperimg'><img src='/img/slider-01.jpg' alt=''/></div>  </SwiperSlide>
        <SwiperSlide>  <div className='swiperimg'><img src='/img/slider-02.jpg' alt=''/></div>  </SwiperSlide>
        <SwiperSlide>  <div className='swiperimg'><img src='/img/slider-03.jpg' alt=''/></div>  </SwiperSlide>
       
       </Swiper>
      

    
      
    </div>
  )
}

export default SlideCart
