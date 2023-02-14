import React,{useState} from 'react'
import { Genrecat } from './genrecat';
import axios from 'axios';
import './genre.css'
import Genrecard from './genrecard';
import {Link} from 'react-router-dom'

const Genre=()=>{
    // const [search,setSearch]=useState("");
    // const [bookData,setData]=useState([]);
    // const searchBook=(search)=>{
        
        
    //         axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
    //         .then(res=>setData(res.data.items))
    //         .catch(err=>console.log(err))
        
    // }
    return(
        <>
        <div id="bestselling">
         <div className='booksheading1 center'>
         <h1>BROWSE GENRES</h1>
         </div>
         <div className='container1'>
          {/* {Genrecat.map((item)=>{
            //<Genrecard key={item.id} items={item} />
            <div key={item.id}>
    <div className="card1">
       {console.log(item)} 
        <div className="card_side card_side-front items1a">
           <div className="card-img">
            <img src={item.link} />
           {console.log(item.link)}              
           </div>
            <div className="card-heading1 center">
               <h3>{item.cat}</h3>
               {console.log(item.cat)} 
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
     
     })}  */}
    
    <Link to="/adventure">
    <div className="card1" >
     
     <div className="card_side card_side-front items1a">
       
         <img className="card-img" src='images/accomplishment-action-adult-adventure-372098-scaled-e1601379300758.jpg' /> 
                     
        
         <div className="card-heading1 center">
            <h3>Adventure</h3>
             
         </div>
        
     </div>
    
 </div>
    </Link>  
    
    <Link to='/romance'>
   <div className="card1" >
     
     <div className="card_side card_side-front items1a">
        
         <img className="card-img" src='images/iStock-503130452.jpg' /> 
                     
       
         <div className="card-heading1 center">
            <h3>Romance</h3>
             
         </div>
        
     </div>
    </div>
  </Link>  
    
    <Link to='/sci-fi'>
    <div className="card1">
     
     <div className="card_side card_side-front items1a">
        
         <img className="card-img" src='images/download.jpg' />                   
                     
      
         <div className="card-heading1 center">
            <h3>Sci-fi</h3>  
         </div> 
     </div>  
 </div>
    </Link>
    
 


  

    <Link to='/horror'>
    <div className="card1">
     
     <div className="card_side ">
     
         <img className="card-img" src='./images/image-asset.jpeg' />                   
                     
       
         <div className="card-heading1 center">
            <h3>Horror</h3>
             
         </div>
        
     </div>
     </div>
    
    </Link>
    
    <Link to='/history'>
    <div className="card1">
     
     <div className="card_side card_side-front items1a">
       
         <img className="card-img" src='images/images.jpg'/>                   
                     
      
         <div className="card-heading1 center">
            <h3>History</h3>
             
         </div>
        
     </div>
    </div>
    </Link>

    <Link to='/biography'>
    <div className="card1">
     
     <div className="card_side card_side-front items1a">
       
         <img className="card-img" src='images/images.jpg'/>                   
                     
      
         <div className="card-heading1 center">
            <h3>Biography</h3>
             
         </div>
        
     </div>
    </div>
    </Link>
    </div>
    </div>
           
        </>
    )
            }
export default Genre;