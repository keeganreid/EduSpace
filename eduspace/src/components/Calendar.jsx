import React, { createRef, useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import '../styles/Styles.css';
import { users, allSessions } from '../lib/firestore-collections';
import { query, where, getDocs, collection} from "firebase/firestore";
import { useAuth } from '../contexts/auth-context';
import { Navigate, NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';


// async function getSessionIDs(userId) { // <-- note switching to argument here
//   const qUserSessions = collection(users, userId, "sessions");
//   const querySnapshot = await getDocs(qUserSessions);
//   return querySnapshot.docs
//     .map(({ id }) => ({ id })); // this shorthand only works for extracting IDs
// }

// async function getSessionsData(userId) {
//   const sessionIDArray = await getSessionIDs(userId);

//   console.log(sessionIDArray);
//   if (sessionIDArray.length === 0) // this is known as the fail-fast/guard pattern
//     return []; // no sessions atm

//     let sessionIDs = [];

//     sessionIDArray.forEach(element => {
//       sessionIDs.push(element.id);
//     })


//   // if here, we've got sessions to fetch

  
//   const qSessionData = query(allSessions, where('__name__', "in", sessionIDs));
//   const querySnapshot = await getDocs(qSessionData);
//   return querySnapshot.docs
//     .map((doc) => ({
//       events: doc.data(),
//       id: doc.id
//     })); // note removal of error suppression
// }


export default function Calendar() {

    const calendarRef = createRef()  //referencing calendar

    const { currentUser } = useAuth();
    const [sessions, setSessions] = useState([]);
    const [error, setError] = useState([]);

    /*
    The commented out code indiciates our approach to displaying a user's sessions in their calendar,
    we intented to get all the document ids of the sessions belonging to a user's profile, then we
    would pull the details of the sessions (most importantly the date of the session) from the corresponding
    document id in the session's table. Although this code does fetch the data, when attempting to call the array
    in the events section of the calendar, nothing is displayed.
    */
  
    // const userId = currentUser && currentUser.uid;
  
  
    // useEffect(() => {
  
    //   if (!userId) {
    //     setSessions([]); // no user logged in, do nothing
    //   }
  
    //   // for tracking if component was detached
    //   let detached = false;
  
  
    //   getSessionsData(userId)
    //     .then((sessionsData) => {
    //       if (detached) return; // detached? do nothing
  
    //       if (sessionsData.length === 0){
    //         setError("No sessions found.");
    //       }
    //       setSessions(sessionsData);
    //       console.log(sessionsData);
    //     })
    //     .catch((err) => {
    //       if (detached) return; // detached? ignore error
    //       console.error('Failed to get user session data:', err);
    //     });
  
    //   return () => detached = true;
    // }, [userId]); // rerun when user changes
  
    // if (!userId){
    //   Navigate('/login');
    //   return;
    // }


    return (
      <>
  <FullCalendar
  ref={calendarRef}
   plugins={[ dayGridPlugin, timeGridPlugin ]}
   initialView="dayGridMonth" // dummy events
   events = "https://fullcalendar.io/demo-events.json?start=2021-03-22&end=2021-08-22"
   progressiveEventRendering = 'true'
   customButtons={{
     myTimeDayBut: {
       text: "timeDay",
       click() {
  
         const calendar = calendarRef.current; 
  
         if (calendar){
           const calendarApi = calendar.getApi();
           
           calendarApi.changeView("timeGridDay");
         }
       },
     },
     myTimeWeekBut: {
       text: "timeWeek",
       click() {
  
         const calendar = calendarRef.current; 
  
         if (calendar){
           const calendarApi = calendar.getApi();
           
           calendarApi.changeView("timeGridWeek");
         }
       },
     },
   }}
   headerToolbar={{
     left: "prev,next",
     center: "title",
     right: "today,myTimeDayBut,myTimeWeekBut,dayGridMonth",
   }}
  />
  </>
    )
  }
