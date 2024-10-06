import React from 'react'

const Categories = () => {
    const data=[
        {
        catimg:'/logo192.png',
        catname:'fashin'
    },
        {
        catimg:'/logo192.png',
        catname:'electronic'
    },
        {
        catimg:'/logo192.png',
        catname:'car'
    },
        {
        catimg:'/logo192.png',
        catname:'home & garden'
    },
        {
        catimg:'/logo192.png',
        catname:'music'
    },
        {
        catimg:'/logo192.png',
        catname:'health & beouty'
    },
        {
        catimg:'/logo192.png',
        catname:'baby toys'
    },
        {
        catimg:'/logo192.png',
        catname:'books'
    },
        
        {
        catimg:'/logo192.png',
        catname:'pets'
    },
]
  return (
    <div className='categorie'>
        {data.map((value,index)=>{
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
  )
}

export default Categories
