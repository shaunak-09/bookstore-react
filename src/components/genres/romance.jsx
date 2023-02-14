import React,{useState,useEffect}from 'react'
import axios from 'axios'
import Cards from '../cards';





function Romance({handleaddproduct}){
    const [datas,setData]=useState([]);  

 
    useEffect(()=>{
      function search()
    {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=romance&key=AIzaSyBhafVQ_Lyq9mYRWHwQkioZzASzwNGZr7w'+'&maxResults=20')
                    .then(res=>{console.log(res);
                      setData(res.data.items)})
                    .catch(err=>console.log(err))
         
    }
      console.log("in")
      search();
      
    },[])
 

 
    return(
        <>
        {console.log("in")}
        <center><h1 className='genre-heading'>Romance</h1></center>
      
     
        
        <div className="container">          
                        <Cards book={datas} handleaddproduct={handleaddproduct}/>
                        
         </div>
        </>   
     );
 } 
 export default Romance;