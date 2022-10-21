//Page where you adding to the forum
import React, { useState, useRef,useEffect } from 'react';
import {  addDoc,getDoc, updateDoc,doc } from 'firebase/firestore';
//import '../styles/style.css';
import { forums } from '../lib/firestore-collections';
import {withRouter,Link} from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { allSessions, users } from "../lib/firestore-collections";


  function AddForum()
  {



    /*the variables etc. for the points*/
    const [userPoints, setUserPoints] = useState([]);
    const { currentUser } = useAuth();

    const getUserPoints = async(userID) => {
        const userRef = doc(users, userID);
        const docSnap = await getDoc(userRef);
      
        if (docSnap.exists()){
            setUserPoints(docSnap.data().points);
        }
    }
    
    useEffect(() => {
        getUserPoints(currentUser.uid)
    }, [currentUser.uid])

    /*Ending of the variables etc.*/
// making references to the titles
    const titleRef = useRef();
    const messageRef= useRef();
    const topicRef = useRef();

      /*adding a function to add a point every time a session is created*/

      async function increaseStointHandler(userID, pointsRef) {
     
        /*Adding code for a user to get points */
  
        setUserPoints(pointsRef + 5);
        let data = {
          points: userPoints + 5
        }
        
        await updateDoc(doc(users, userID), data);
            alert ("Thank you for asking a question on the form, five points have been given to you!")
    
      
      
  }/*done with it*/
    function handleSubmit(e){
      e.preventDefault();
       /*declare the vallues to actually fetch from the database*/
      const title = titleRef.current.value;
      const message = messageRef.current.value;
      const topic = topicRef.current.value;
      const  count = 0;
        /*Telling to what fields add to the database on firebase*/
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
     {/*This is where you type to declare the actual */}
        <form onSubmit={handleSubmit}>
            <input type='text' id='title' ref={titleRef} placeholder='Title'/>
            <input type='text' id='message' ref={messageRef} placeholder='Message'/>
            <input type='text' id='topic' ref={topicRef} placeholder='Topic'/>

            <button className='button-27' type = 'submit'onClick={() => increaseStointHandler(currentUser.uid, userPoints)}>Add forum!</button>
           {/* <button type='submit'>Add a comment</button>*/}

        </form>
    </div>

  )

}

export default AddForum;

