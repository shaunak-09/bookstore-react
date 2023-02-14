import React,{useEffect, useState} from 'react'
import Cards from './cards';
import axios from "axios";
import './srchbooks.css'

const Srchbooks=({handleaddproduct})=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
   function searchBook(evt){
    
    if(evt.key==="Enter"){
        evt.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBhafVQ_Lyq9mYRWHwQkioZzASzwNGZr7w'+'&maxResults=20')
            .then(res=>{setData(res.data.items)})
           
            .catch(err=>console.log(err))

    }
    }
        function searchBook1(){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBhafVQ_Lyq9mYRWHwQkioZzASzwNGZr7w'+'&maxResults=20')
                      .then(res=>{
                        setData(res.data.items)})
                     
                      .catch(err=>console.log(err))
                  }
    
 
    
    return(
        <>
         <div id='recommended'>
         <div className='booksheading center'>
         <h1>SEARCH BOOKS</h1>
         </div>
                  
                <form className="search-bar center">
                <input type="text" className="search-input" placeholder="Enter your book name" value={search} onChange={(e)=>setSearch(e.target.value)}
                        onKeyPress={searchBook} />
            <button onClick={searchBook1} className="search-btn" type="button"><i className="fa-solid fa-lg fa-magnifying-glass"></i></button> 
            </form>
                    
              
            <div className="container">
                    <Cards book={bookData} handleaddproduct={handleaddproduct}/>   
            </div>
            </div>
        </>
    )
            }          
export default Srchbooks;