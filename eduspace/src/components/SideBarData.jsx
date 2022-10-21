//Adding the pages that should display in the sidebar
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdContact />,
    cName: 'nav-text'
  },
  {
    title: 'Sessions',
    path: '/sessions',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Marketplace',
    path: '/marketplace',
    icon: <IoIcons.IoMdWallet />,
    cName: 'nav-text'
  },

  {
    title: 'Forum',
    path: '/forum',
    icon: <IoIcons.IoMdPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Redeem',
    path: '/Redeem',
    icon: <IoIcons.IoMdPricetag />,
    cName: 'nav-text'
  },
  {
    title: 'Online Resources',
    path: '/onlineResources',
    icon: <IoIcons.IoIosApps />,
    cName: 'nav-text'
  },
  {
  title: 'General Quiz',
  path: '/generalquiz',
  icon: <IoIcons.IoMdSchool />,
  cName: 'nav-text'
  },
  {
    title: 'Create Session',
    path: '/createsession',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoIosOutlet />,
    cName: 'nav-text'
  },
  {
    title: 'Add Question',
    path: '/addquestion',
    icon: <IoIcons.IoIosOutlet />,
    cName: 'nav-text'
  }


];