import React, { useState, useEffect } from 'react'
import { users } from '../lib/firestore-collections';
import { getDoc, doc } from 'firebase/firestore';
import { useAuth } from '../contexts/auth-context';
import wave from '../images/wave.svg';


function ViewProfile() {

    const [user, setUser] = useState([]);
    const { currentUser } = useAuth();

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
        <div style={{'display': 'flex'}}>
            <img src={wave} alt="wave" style={{'overflow': 'hidden'}}/>
            <img src={currentUser.photoURL} alt="Profile" className='profilePicture'/>
            <label style={{'position': 'absolute','top':'10%', 'left': '20%'}}>{user.fullname}</label>
        </div>

    )
}

export default ViewProfile