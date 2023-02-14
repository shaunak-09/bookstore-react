import React from 'react';
import Landingpage from './landingpage';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Srchbooks from './srchbooks';
import Genre from './genre';
import Adventure from './genres/adventure';
import Romance from './genres/romance';
import Sci_fi from './genres/sci_fi';
import Horror from './genres/horror';
import History from './genres/history';
import Biography from './genres/biography';
import Cart from './cart';
import { useState } from 'react';

function App() {
  const[cartitems,setcartitems]=useState([]);
  const handleaddproduct=(product)=>{
    const productexist=cartitems.find((item)=>item.product.id===product.id)
    if(productexist)
    {setcartitems(cartitems.map((item)=>item.product.id===product.id?{...productexist,quantity:productexist.quantity+1}:item))}
    else{
      // setcartitems([...cartitems,{...product,quantity:1}])
      cartitems.push({product,quantity:1})
      setcartitems(cartitems);
      // console.log(cartitems)
    }
    console.log("item added")
    console.log(cartitems)
  }
  const handleremoveproduct=(product)=>{
    const Productexist=cartitems.find((item)=>item.id===product.id)
     if(Productexist)
     {
      if(Productexist.quantity==1)
      setcartitems(cartitems.filter((item)=>item.id!=product.id))
      else setcartitems(cartitems.map((item)=>item.id==product.id?{...Productexist,quantity:Productexist.quantity-1}:item))
     }
     console.log("item removed")

  }
  return (
    <>
    <Router>
      <Routes>
        
        <Route path='/' element={
        <>
        <Landingpage />
        <Genre />
        <Srchbooks handleaddproduct={handleaddproduct}/>
        </>
      }></Route>
        <Route path='/genre' element={ <Genre handleaddproduct={handleaddproduct}/>}></Route>
        <Route path='/book' element={<Srchbooks handleaddproduct={handleaddproduct}/>}></Route>
        <Route path='/adventure' element={<Adventure handleaddproduct={handleaddproduct}/>}></Route>
        <Route path='/romance' element={<Romance handleaddproduct={handleaddproduct}/>}></Route>
        <Route path='/sci-fi' element={<Sci_fi handleaddproduct={handleaddproduct}/>}></Route>                                                                    
        <Route path='/horror' element={<Horror handleaddproduct={handleaddproduct}/>}></Route>
        <Route path='/history' element={<History handleaddproduct={handleaddproduct}/>}></Route>
        <Route path='/cart' element={<Cart cartitems={cartitems} handleaddproduct={handleaddproduct} handleremoveproduct={handleremoveproduct}/>}></Route>
        <Route path='/biography' element={<Biography handleaddproduct={handleaddproduct}/>}></Route>

       
        
      </Routes>
     
      
      
      
    </Router>
     
    </>
      
  );
}

export default App;
