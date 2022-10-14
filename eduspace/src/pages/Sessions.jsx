import React, { useState, useEffect } from 'react'
import { users, allSessions } from '../lib/firestore-collections';
import { query, where, getDocs, collection, documentId, } from "firebase/firestore";
import { useAuth } from '../contexts/auth-context';
import { db } from '../lib/init-firebase';
import { useCallback } from 'react';
import { useMemo } from 'react';
import SideBar from '../components/SideBar';
import { NavLink } from 'react-router-dom';

async function getSessionIDs(userId) { // <-- note switching to argument here
  const qUserSessions = collection(users, userId, "sessions");
  const querySnapshot = await getDocs(qUserSessions);
  return querySnapshot.docs
    .map(({ id }) => ({ id })); // this shorthand only works for extracting IDs
}

async function getSessionsData(userId) {
  const sessionIDArray = await getSessionIDs(userId);

  let sessionIDs = [];

  sessionIDArray.forEach(element => {
    sessionIDs.push(element.id);
  })

  if (sessionIDArray.length === 0) // this is known as the fail-fast/guard pattern
    return []; // no sessions atm

  // if here, we've got sessions to fetch

  // WARNING: The 'in' operator can only handle up to 10 sessions at a time!
  const qSessionData = query(allSessions, where('__name__', "in", sessionIDs));
  const querySnapshot = await getDocs(qSessionData);
  return querySnapshot.docs
    .map((doc) => ({
      data: doc.data(),
      id: doc.id
    })); // note removal of error suppression
}

export default function Sessions() {

  const { currentUser } = useAuth();
  const [sessions, setSessions] = useState([]);

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
        setSessions(sessionsData);
      })
      .catch((err) => {
        if (detached) return; // detached? ignore error
        console.error('Failed to get user session data:', err);
      });

    return () => detached = true;
  }, [userId]); // rerun when user changes



  return (
    <div>
      <SideBar/>
      <h1 className='pageHeading'>Tutoring Sessions</h1>
      <div className='listItemContainer'>
        {sessions.map((session) => (
          <NavLink to='/chat' style={{'text-decoration': 'none', 'color': 'black'}}>
          <div key={session.id} className='listItemToSelect'>
            <label style={{'font-size': '1.3em', 'z-index': '-1'}}>{session.data.module}</label>
            <br></br>
            <label style={{'z-index': '-1'}}><span style={{'font-style': 'italic'}}>Tutor:</span> {session.data.tutor}</label>
            <br></br>
            <label><span style={{'font-style': 'italic', 'z-index': '-1'}}>Session Location:</span> {session.data.location}</label>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}




/*  <ul>
        {sessions.map((session) => (
          <li key={session.id}>
            {session.id} {session.data.location}
          </li>
        ))}
      </ul> */