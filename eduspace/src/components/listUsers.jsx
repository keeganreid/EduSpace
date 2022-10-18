import React, { useState, useEffect } from 'react';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import {users, allSessions} from '../lib/firestore-collections';
import { useAuth } from '../contexts/auth-context';

export default function ListUsers({childToParent}) {
  const { currentUser } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [Users, setUsers] = useState([]);
  let sessionIDArray = [];

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    getDocs(collection(users, currentUser.uid, "sessions"))
      .then((response) => {
        const user = response.docs.map((doc) => ({
          id: doc.id
        }));
        setUsers(user);
      })
      .catch((error) => console.log(error.message));

      console.log(Users);
  }

  function toParent(){
    childToParent();
  }

  const loadSessionIDsToArray = async () => {
    console.log("second")
    Users.forEach(element => {
      sessionIDArray.push(element.id);
    })

    console.log(sessionIDArray)
  }

  const getSessionsUsingIDs = async () => {
    console.log("third")
      const q = query(allSessions, where('__name__', "in", sessionIDArray));
      getDocs(q)
        .then((response) => {
          const session = response.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id
          }));
          setSessions(session);
        }).catch((error) => console.log(error.message));

        return(
          <div>
            <p>No sessions found</p>
          </div>
        )
  }

  //referencing user collection in firestore
  //do the same for every database collection (which resembles a database table)
  return (
    <div>
      <h2>Awe {currentUser.uid}</h2>
    </div>
  )

}
