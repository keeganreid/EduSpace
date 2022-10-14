import React, { useEffect, useState, useRef } from 'react'
import { getDocs, getDoc, onSnapshot, query, collection, where, addDoc } from 'firebase/firestore';
import { forums } from '../lib/firestore-collections';
import { useParams, NavLink } from 'react-router-dom'
import { async } from '@firebase/util';







function CommentForum() {

  const [cmnt, setComments] = useState([]);
  const params = useParams();
  const frmID = params.frmID;
  const messageRef= useRef();
  const qComments = collection(forums, frmID, "comments")




  useEffect(() => {
    onSnapshot(qComments, (snapShot) =>
      setComments(snapShot.docs.map((doc) => doc)))
  }, [frmID])



    function handleSubmit(e){
      e.preventDefault();

      const message = messageRef.current.value;

      addDoc(qComments, {message});
      //window.location.reload();
     // return addDoc();
      
  }   









  return (



    <div>
      {cmnt.map((forum) =>
        <div key={forum.id} className="thread-post">


          {forum.data().message}


        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input type='text' id='message' ref={messageRef} placeholder='Message' />

        <button type='submit'>Add Comment</button>
        {/* <button type='submit'>Add a comment</button>*/}

      </form>

    </div>



  )
}

export default CommentForum




//below is the code from the normal form view

/*export default function Forum() {
    const [Forum, setForums] = useState([]);
    const [messages, setMessages] = useState(null);
    const [snapShot, setSnapShot]= useState([]);
  
    useEffect(
      () =>
       onSnapshot(forums, (snapShot) =>
      setForums(snapShot.docs.map((doc) => doc ))
      ),[]);
  
  
  
      
  
  
       
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

/* const refreshPage = ()=>{
   window.location.reload();
}
 
 return (
   <div id="thread" >
 
 
     {Forum.map((forum) =>
     <NavLink to={`/comment/${forum.id}`}>
     <div key={forum.id} className="thread-post">
    
       
       {forum.data().title}
     
       <br></br>
       
       {forum.data().message}
 
       <br></br>
       
 
       {forum.data().topic}
       <br></br>
 
       
     </div>
     </NavLink>
     )}
 
   </div>
 
 )
 
 
}*/