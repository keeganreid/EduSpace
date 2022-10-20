import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import { IconContext } from 'react-icons';
import logo from '../images/logo.png';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


/* function SideBar() {
  return (
    <div>
      <NavLink to='/login'>
        <h1>Login</h1>
      </NavLink>
      <NavLink to='/'>
        <h1>Home</h1>
      </NavLink>

    </div>
  )
}
*/

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const msg = useContext(CartContext)

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>

      <IconContext.Provider value={{ color: '#f2ecec' }}>
        <div className='navbar'>
          <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />    
          </NavLink>

          <NavLink to='/'>
          <img src={logo} alt='logo' style={{'height': '80px', 'width': '100px', 'position':
           'absolute', 'right': '2em', 'top': '0.2em'}} />
          </NavLink>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <NavLink to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default SideBar