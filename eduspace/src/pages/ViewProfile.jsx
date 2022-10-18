import React, { useState, useEffect } from 'react'
import { users } from '../lib/firestore-collections';
import { getDoc, doc } from 'firebase/firestore';
import { useAuth } from '../contexts/auth-context';
import wave from '../images/wave.svg';
import {motion} from 'framer-motion';
import SideBar from '../components/SideBar';
import { NavLink } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';

function ViewProfile() {

    const [user, setUser] = useState([]);
    const { currentUser } = useAuth();
    const [activeTab, setActiveTab] = useState("About");

    const getUserDetails = async (userID) => {
        const userRef = doc(users, userID);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            setUser(docSnap.data());
        }
    }

    useEffect(() => {
        getUserDetails(currentUser.uid)
    }, [currentUser.uid])

    return (
        <motion.div
        animate={{opacity: 1}}
       initial={{opacity:0}}
       exit={{opacity:0}}
       transition={{duration:0.5}}>
        <div >
            <SideBar></SideBar>
            <img src={wave} alt="wave" style={{'overflow': 'hidden', 'width': '100vw'}}/>
            <img src={currentUser.photoURL} alt="Profile" className='profilePicture' style={{'backgroundColor': '#bbb'}}/>
            <h1 style={{'position': 'absolute','top':'5%', 'left': '20%', 'color': '#f2ecec',
             'text-shadow': '2px 2px black'}}>{user.fullname}</h1>
              <h2 style={{'position': 'absolute','top':'13%', 'left': '20%', 'color': '#f2ecec',
             'text-shadow': '2px 2px black'}}>({currentUser.displayName})</h2>
             <NavLink to='/createprofile'>
             <button className='editButton'><span style={{'fontSize': '1.3em'}}><IoIcons.IoMdCreate /></span> Edit profile</button>
             </NavLink>
             <button onClick={() => setActiveTab("About")}  style={{'position': 'absolute','top':'40%', 'left': '20%'}} className='profileTabButton'>About</button>
             
             <p>{user.bio}</p>
        </div>
        </motion.div>

    )
}

export default ViewProfile