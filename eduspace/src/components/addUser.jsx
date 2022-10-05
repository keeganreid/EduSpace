import React, {useState} from 'react';
import {addDoc} from 'firebase/firestore';
import {users} from '../lib/firestore-collections';

function AddUser() {
    const [name, setName] = useState('');


function handleSubmit(e){
e.preventDefault();
if (name === ''){
    return;
}

alert(name);


addDoc(users, {name});

}

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type='text' id = 'name' value={name} onChange = {e => setName(e.target.value)}/>
        <button type='submit'>Add user</button>
    </form>
    </div>
  )
}

export default AddUser