//Shows the sessions you have before entering it to go to a chat
import React, { useState, useEffect } from 'react'
import { users, allSessions } from '../lib/firestore-collections';
import { query, where, getDocs, collection} from "firebase/firestore";
import { useAuth } from '../contexts/auth-context';
import SideBar from '../components/SideBar';
import { Navigate, NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

async function getSessionIDs(userId) { 
  const qUserSessions = collection(users, userId, "sessions");
  const querySnapshot = await getDocs(qUserSessions);
  return querySnapshot.docs
    .map(({ id }) => ({ id })); // we need the ids of all sessions to which our user belongs
}

async function getSessionsData(userId) {
  const sessionIDArray = await getSessionIDs(userId);

  if (sessionIDArray.length === 0) // this is known as the fail-fast/guard pattern
    return []; // no sessions atm

    let sessionIDs = [];

    sessionIDArray.forEach(element => {
      sessionIDs.push(element.id);
    })


  // if here, we've got sessions to fetch

  const qSessionData = query(allSessions, where('__name__', "in", sessionIDs)); //get the fields of all the sessions 
                                                     //that our user belongs to
  const querySnapshot = await getDocs(qSessionData);
  return querySnapshot.docs
    .map((doc) => ({
      data: doc.data(),
      id: doc.id
    }));
}

export default function Sessions() {

  const { currentUser } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState([]);

  const userId = currentUser && currentUser.uid; 


  useEffect(() => {

    if (!userId) {
      setSessions([]); // no user logged in, do nothing
    }

    // for tracking if component was detached
    let detached = false;


    getSessionsData(userId)
      .then((sessionsData) => {
        if (detached) return; // detached? do nothing

        if (sessionsData.length === 0){
          setError("No sessions found.");
        }
        setSessions(sessionsData);
      })
      .catch((err) => {
        if (detached) return; // detached? 
      });

    return () => detached = true;
  }, [userId]); // rerun when user changes

  if (!userId){
    Navigate('/login');
    return;
  }
    
// this page displays all sessions to which a user belongs, allowing them to click on the session and navigate to the corresponding chat
//that is why we pass through the parameter of the session id - because a group chat belongs to that session.
  return (
    <div>
      <SideBar/>
      <motion.div
       animate={{opacity: 1}}
       initial={{opacity:0}}
       exit={{opacity:0}}
       transition={{duration:0.5}}
       >
      <h1 className='pageHeading'>Tutoring Sessions</h1>
      </motion.div>
      <div className='listItemContainer'>
          <label style={{'fontSize': '1.2em', 'marginLeft': '35%'}}>{error}</label>
        {sessions.map((session) => (
          <NavLink to={`/chat/${session.id}`} style={{'textDecoration': 'none', 'color': 'black'}} key={session.id}>
          <motion.div  className='listItemToSelect'
          animate={{opacity: 1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration:0.5}}
          >
            <label className='listItemMainText'>{session.data.module}</label>
            <br></br>
            <label className='listItemOtherText'><span style={{'fontStyle': 'italic'}}>Tutor:</span> {session.data.tutor}</label>
            <br></br>
            <label className='listItemOtherText'><span style={{'fontStyle': 'italic'}}>Session Location:</span> {session.data.location}</label>
          </motion.div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
