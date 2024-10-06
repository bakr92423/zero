import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        cartTotal,
        isEmpty,
        items,
        totalItems,
        quantity,
        totalUniqueItems,
        updateItemQuantity,
        removeItem,
        emptyCart
    }=useCart()
    if(isEmpty)return<h2 className='empity'>You Cart Empty</h2>
  return (
    <div className='cartitem'>
        <div className='detalsprise'>

        <h5>cart : ({totalUniqueItems}) && total items : ({totalItems})</h5>
        <button onClick={()=>emptyCart()}>clear cart</button>
        <button>bay now</button>
        <h5>total price : ${cartTotal}</h5>
        </div>
        {items.map((item,index)=>{
            
            return(
                <div className='productCart'>
        <h4 className='name'>{item.name}</h4>
            <div className='img'>
                <img src={item.img} alt='' />
                <i class="fa-solid fa-xmark"  onClick={()=>removeItem(item.id)}></i>
            </div>
            <div className='detals'>
            <p>${item.price}*{item.quantity}  - <span> Total Price : ${item.price*item.quantity}</span></p>
            <div className='count'>
            <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
            <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
            
            </div>
            </div>
        </div>
            )
            


        })}
        
        
      
    </div>
  )
}

export default Cart
