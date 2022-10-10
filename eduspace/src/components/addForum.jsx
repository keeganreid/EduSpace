import React, { useState } from 'react';
import {  addDoc } from 'firebase/firestore';
//import '../styles/style.css';
import { forums } from '../lib/firestore-collections';


  function AddForum()
  {
    const [title, setTitle] = useState('');
    const[message, setMessage] = useState('');
    const[topic, setTopic] = useState('');


    function handleSubmit(e){
      e.preventDefault();

  addDoc(forums,{title, message, topic});
}

  /* return (
    <div id="thread">
  <div class="thread-post">
    Post #1 {forums.map((forum)=> 
    (<li key={forum.id}>
      {forum.data.title}
      </li>))}
  </div>
  <div class="thread-post">
    Post #2 contents
  </div>
  <div class="thread-post">
    Post #3 contents
  </div>
</div>

  )*/
  

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' id='title' value={title} onChange = {e => setTitle(e.target.value)}/>
            <input type='text' id='message' value={message} onChange = {e => setMessage(e.target.value)}/>
            <input type='text' id='topic' value={topic} onChange = {e => setTopic(e.target.value)}/>

            <button type='submit'>Add forum</button>

        </form>
    </div>

  )

}

export default AddForum;
