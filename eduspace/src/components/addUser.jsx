import React, {useState} from 'react';
import {addDoc} from 'firebase/firestore';
import {allQuiz} from '../lib/firestore-collections';

function AddUser() {
    const [name, setName] = useState('');


function handleSubmit(e){
e.preventDefault();

 let options = {
    id: 0,
    text: "I am a tester question",
    isCorrect: false
  }


addDoc(allQuiz, {text: "Hello", options});




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