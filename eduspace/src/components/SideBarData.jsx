import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Schedule',
    path: '/schedule',
    icon: <IoIcons.IoIosAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'StartPage',
    path: '/StartPage',
    icon: <IoIcons.IoIosAddCircle />,
    cName: 'nav-text'
  }
  
];