import React, { useState, useEffect } from 'react'
import { users } from '../lib/firestore-collections';
import { getDoc, doc } from 'firebase/firestore';
import { useAuth } from '../contexts/auth-context';
import wave from '../images/wave.svg';
import { motion } from 'framer-motion';
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
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div >
                <SideBar></SideBar>
                <img src={wave} alt="wave" style={{ 'overflow': 'hidden', 'width': '100vw' }} />
                <img src={currentUser.photoURL} alt="Profile" className='profilePicture' style={{ 'backgroundColor': '#bbb' }} />
                {user.type === "company" && (
                    <h1 style={{
                        'position': 'absolute', 'top': '5%', 'left': '20%', 'color': '#f2ecec',
                        'text-shadow': '2px 2px black'
                    }}>{user.companyName}</h1>
                )}
                <h1 style={{
                    'position': 'absolute', 'top': '5%', 'left': '20%', 'color': '#f2ecec',
                    'text-shadow': '2px 2px black'
                }}>{user.fullname}</h1>
                <h2 style={{
                    'position': 'absolute', 'top': '13%', 'left': '20%', 'color': '#f2ecec',
                    'text-shadow': '2px 2px black'
                }}>({currentUser.displayName})</h2>
                <h2 style={{
                    'position': 'absolute', 'top': '21%', 'left': '20%', 'color': '#f2ecec',
                    'text-shadow': '2px 2px black', 'fontSize': '1em'
                }}>{currentUser.email}</h2>
                <NavLink to='/editprofile'>
                    <button className='editButton'><span style={{ 'fontSize': '1.3em' }}><IoIcons.IoMdCreate /></span> Edit profile</button>
                </NavLink>
                <button onClick={() => setActiveTab("About")} style={{ 'position': 'absolute', 'top': '45%', 'left': '10%' }}
                    className={activeTab === 'About' ? 'activeTabButton' : 'nonActiveTabButton'}>About</button>

                {user.type === "company" && (
                    <button onClick={() => setActiveTab("Website")} style={{ 'position': 'absolute', 'top': '45%', 'left': '20%' }}
                        className={activeTab === 'Website' ? 'activeTabButton' : 'nonActiveTabButton'}>Website</button>
                )}

                {user.type === "student" && (
                    <button onClick={() => setActiveTab("Education")} style={{ 'position': 'absolute', 'top': '45%', 'left': '20%' }}
                        className={activeTab === 'Education' ? 'activeTabButton' : 'nonActiveTabButton'}>Education</button>
                )}

                {activeTab === "About" && (
                    <div>
                        <label style={{ 'position': 'absolute', 'top': '55%', 'left': '10%' }} className='profileHeading'>About me</label>
                        <p style={{ 'position': 'absolute', 'top': '60%', 'left': '10%', 'fontSize': '1.1em' }}> {user.bio}</p>
                    </div>
                )}

                {activeTab === "Education" && (
                    <div>
                        <label style={{ 'position': 'absolute', 'top': '55%', 'left': '10%' }} className='profileHeading'>Faculty</label>
                        <p style={{ 'position': 'absolute', 'top': '60%', 'left': '10%', 'fontSize': '1.1em' }}>{user.faculty}</p>
                        <label style={{ 'position': 'absolute', 'top': '70%', 'left': '10%' }} className='profileHeading'>Degree/Diploma</label>
                        <p style={{ 'position': 'absolute', 'top': '75%', 'left': '10%', 'fontSize': '1.1em' }}>{user.degree}</p>
                    </div>
                )}

                {activeTab === "Website" && (
                    <div>
                        <label style={{ 'position': 'absolute', 'top': '55%', 'left': '10%' }} className='profileHeading'>Website</label>
                        <p style={{ 'position': 'absolute', 'top': '60%', 'left': '10%', 'fontSize': '1.1em' }}> {user.companyURL}</p>
                    </div>
                )}

            </div>
        </motion.div>

    )
}

export default ViewProfile