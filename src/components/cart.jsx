import React from 'react'

import './cart.css'

function Cart({cartitems,handleaddproduct,handleremoveproduct}) {

  console.log(cartitems);
  return (
    
    <>
    
    <div className='cart-items'></div>
    <div className='cart-heading center'>YOUR CART</div>
    
       {((cartitems.length)===0) && (
        <div className='cartitem-empty'>Cart is Empty</div>
       )}
    <div className='container'>
        {cartitems.map((item)=>{
           let thumbnail=item.product.volumeInfo.imageLinks && item.product.volumeInfo.imageLinks.thumbnail;
           let amount=item.product.saleInfo.listPrice && item.product.saleInfo.listPrice.amount;
           if(thumbnail!= undefined && amount !=undefined)
          return(
            <div key={item.id} className='cartitem-card'>
              {/* {console.log(item)} */}
             
               <img className='card-picture'
                    src={thumbnail}
                    alt={item.product.volumeInfo.title}/>
                <div className='card-heading center'>{item.product.volumeInfo.title}</div>
                <div className='itemamount center'>{amount}</div>
                <div className='quantity center'>{item.quantity}</div>
                <div className='cartitem-functions center'>
                    <button className='cartitem-ar' onClick={()=>{handleaddproduct(item)}}>+</button>
                    <button className='cartitem-ar' onClick={()=>{handleremoveproduct(item)}}>-</button>
                </div>
                </div>

          )
            
            
        })}
    </div>
     
    </>
    
  )
}

export default Cart;