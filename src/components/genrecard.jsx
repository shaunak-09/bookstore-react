import React from 'react';
import './genre.css'



function Genrecard(items){
    
    return(
    <>
    <div key={items.id}>
    <div className="card1">
       {console.log(items)} 
        <div className="card_side card_side-front items1a">
           <div className="card-img">
            <img src={items.link} />
           {console.log(items.link)}              
           </div>
            <div className="card-heading1 center">
               <h3>{items.cat}</h3>
               {console.log(items.cat)} 
            </div>
           
        </div>
        <div className="card_side card_side-back items1b">
            <h2 className="description">Description</h2>
            <p className="back-txt"></p></div>
    </div>
    
    <div  className="add center" href="" data-hover="ADDED">
                <p className="add-txt">ADD TO CART</p>
    </div>

</div>
    </>
    );
}

export default Genrecard;