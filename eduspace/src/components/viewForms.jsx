import React, { useEffect, useState,useRef } from 'react';
import { getDocs, onSnapshot, query,collection, updateDoc, doc, getDoc, FieldValue} from 'firebase/firestore';
//import '../styles/style.css';
import { forums } from '../lib/firestore-collections';
import { NavLink } from 'react-router-dom';




export default function Forum() {
  const [Forum, setForums] = useState([]);
  const titleRef = useRef();
  const [messages, setMessages] = useState(null);
  const [snapShot, setSnapShot]= useState([]);

  useEffect(
    () =>
     onSnapshot(forums, (snapShot) =>
    setForums(snapShot.docs.map((doc) => doc ))
    ),[]);

    async function upVote (forumID, countRef){
      //window.location.reload();
      //console.log('Poes')
      //const increment =firebase.firestore.FieldValue.increment(1);
      let data = {
        count: countRef + 1
      }
      updateDoc(doc(forums, forumID), data);
    
    
    }
    async function downVote (forumID, countRef){
      //window.location.reload();
      //console.log('Poes')
      //const increment =firebase.firestore.FieldValue.increment(1);
      let data = {
        count: countRef  -1
      }
      updateDoc(doc(forums, forumID), data);
    
    
    }


    


     
   // }
    // onSnapshot(getDocs)
    // getDocs(forums)
    //   .then((response) => {
    //     const forum = response.docs.map((doc) => ({
    //       data: doc.data(),
    //       id: doc.id,
    //     }));
    //     setForums(forum);
    //   })
    //   .catch((error) => console.log(error.message));
  

  
    

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
  

 /*const downVote = ()=>{
  //window.location.reload();
  console.log('Poes')
}*/

  const refreshPage = ()=>{
    //window.location.reload();
    console.log('Poes')
 }

  return (
    <div className='b' id="thread" >

      {Forum.map((forum) =>
      <div key={forum.id}> 
        <button onClick={ () => upVote(forum.id, forum.data().count)}>Upvote</button>  <button onClick={ () => downVote(forum.id, forum.data().count)}>downvote</button> <label>{forum.data().count}</label>
      <NavLink className='a' to={`/comment/${forum.id}`}>
      <div className="thread-post">
     
  
        {forum.data().title}
     
        <br></br>
        
        {forum.data().message}

        <br></br>
        

        {forum.data().topic}
        <br></br>

        
      </div>
      </NavLink>
      </div>
      )}

    </div>

  )


}
