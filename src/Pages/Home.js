import React from 'react'
import Categories from '../Component/Categories'
import SlideCart from '../Component/SlideCart'
import FlashCard from '../Component/FlashCard'
import TopCart from '../Component/TopCart'
import Arrivals from './Arrivals'
import Discount from './Discount'
import Shope from './ٍShope'
import Banner from '../Component/Banner'


const Home = () => {
  return (
    <>
    <div  className='home'>
        <Categories/>
        <SlideCart/>
    </div>
        <FlashCard/>
        <TopCart/>
        <Arrivals/>
        <Discount/>
        <Shope/>
        <Banner/>
       
    </>
  )
}

export default Home
