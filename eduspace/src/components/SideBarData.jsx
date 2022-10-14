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
<<<<<<< HEAD
    title: 'Survey',
    path: '/survey',
    icon: <IoIcons.IoIosAnalytics />,
=======
    title: 'Schedule',
    path: '/schedule',
    icon: <IoIcons.IoIosAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'StartPage',
    path: '/StartPage',
    icon: <IoIcons.IoIosAddCircle />,
>>>>>>> 18dabe0aedb8e5b394c73c15b32bfb56205a8cb8
    cName: 'nav-text'
  }
  
];