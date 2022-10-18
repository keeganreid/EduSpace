import React, { useState, useRef } from 'react';
import {  addDoc } from 'firebase/firestore';
//import '../styles/style.css';
import { forums } from '../lib/firestore-collections';
import {withRouter,Link} from 'react-router-dom';



  function AddForum()
  {

    // const [title, setTitle] = useState('');
    // const[message, setMessage] = useState('');
    // const[topic, setTopic] = useState('');

    const titleRef = useRef();
    const messageRef= useRef();
    const topicRef = useRef();


    function handleSubmit(e){
      e.preventDefault();

      const title = titleRef.current.value;
      const message = messageRef.current.value;
      const topic = topicRef.current.value;
      const  count = 0;

      addDoc(forums, {title, message, topic,count});
         // 👇️ clear all input values in the form
    e.target.reset();
      //window.location.reload();
    //  return addDoc();
      
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
    <div >
     
        <form onSubmit={handleSubmit}>
            <input type='text' id='title' ref={titleRef} placeholder='Title'/>
            <input type='text' id='message' ref={messageRef} placeholder='Message'/>
            <input type='text' id='topic' ref={topicRef} placeholder='Topic'/>

            <button type = 'submit'>Add forum</button>
           {/* <button type='submit'>Add a comment</button>*/}

        </form>
    </div>

  )

}

export default AddForum;

