import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import '../src/style.css';

export default function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    const userCol = collection(db, 'user');
    getDocs(userCol)
      .then((response) => {
        const user = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setUsers(user);
      })
      .catch((error) => console.log(error.message));
  }

  //referencing user collection in firestore
  //do the same for every database collection (which resembles a database table)

  return (
    <div>
      <h2>Awe</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.data.name} {user.data.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
