import React,{useEffect, useState} from 'react'
import './cards.css'



function Cards({book,handleaddproduct}) {
 
 
    return (
    
          <>
          {  
            book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            
                           <div className='card' key={item.id}>
                           <div className="rec-card" >
                               <div>
                                 <img className="card-picture" src={thumbnail} alt="" />
                               </div>
                               <div className="card-heading center">
                                   <h3>{item.volumeInfo.title}</h3>
                   
                               </div>
                               <div className="card-txt center">
                                   by {item.volumeInfo.authors}
                               </div>
                               <div  className="amount center">
                                   Rs. {amount}
                               </div>
                               
           
                            </div>
                            <div className="add center" href="">
                                  <p className="add-txt" onClick={()=>{handleaddproduct(item)
                                console.log(item)}}>ADD TO CART</p>
                               </div>
                            </div>
                           
                             

                            
                            
                            </>
                            
                              
                            
                            )
                        }
                        
                    })
                }
                
    
            </>
    );
                
                    
                    
            

       
   
}

export default Cards;