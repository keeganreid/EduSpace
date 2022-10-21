//Page to make the sidebar
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import { IconContext } from 'react-icons';
import logo from '../images/logo.png';
import { useEffect } from 'react';
import {useAuth} from '../contexts/auth-context';
import { getDoc, doc } from 'firebase/firestore';
import {users} from '../lib/firestore-collections';


function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const [userType, setUserType] = useState();
  const {currentUser} = useAuth();

  useEffect(()=>{
    getUserDetails(currentUser.uid)
  },[currentUser.uid])

  const getUserDetails = async (userID) => {
    const userRef = doc(users, userID);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
        setUserType(docSnap.data().type);
    }
  }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#f2ecec' }}>
        <div className='navbar'>
          <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
          <NavLink to='/home'>
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
                    {(userType === "company" && item.title === "Study Groups" ? <></> : item.icon) ||
                    (userType === "student" && item.title === "Create Session" ? <></> : item.title)
                    }
                    <span style={{'marginLeft': '1em'}}>{(userType === "company" && item.title === "Study Groups" ? <></> : item.title) ||
                    (userType === "student" && item.title === "Create Session" ? <></> : item.title)
                    }</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar