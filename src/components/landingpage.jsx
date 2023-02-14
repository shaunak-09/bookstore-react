import React,{useState} from 'react'
import './landingpage.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebar';
import './navbar.css';
import { IconContext } from 'react-icons';




const Landingpage=()=> {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="brand-title">ULTIMATE</div>
          
          <Link to='#'className='login'>Login/SignUp</Link>
         <Link to='/cart'  className='cart'><AiIcons.AiOutlineShoppingCart /></Link> 
            
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

     
     <div id='heading'>
        <div className="heading_txt">
        <div className="txt_primary">INDIA'S LARGEST BOOKSTORE</div>
        <div className="txt_sec">Buy Best Books from</div>
        <a href="#" className="btn btn-bg">BUY BOOKS</a>
       </div>   
    </div> 

    
    </>
    
    

    
   
  );
}

export default Landingpage;