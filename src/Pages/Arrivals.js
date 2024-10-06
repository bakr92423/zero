import React from 'react'
import Arrival from './Arrivaldata'


const Arrivals = () => {
  return (
    <div className='Arrivals'>
    <div className='topcart'>
      <div className='titile arrivaltitile'>
        <p><img src='/img/logo 1.png' alt />new Arrivals</p>
        <p>view all <i class="fa-solid fa-play"></i></p>
      </div>
      <div className='parentarrival'>


{Arrival.map((value,id)=>{
  return(
  
        <div className='arrivalproduct'>
        <div className='img'>
          <img src={value.img} alt='' />
          <p className='name'>{value.name}</p>
        </div>
      </div>
    


)
})}


</div>
      </div>
      
    </div>
  )
}

export default Arrivals
