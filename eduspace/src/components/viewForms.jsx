import React, { useEffect, useState } from 'react';
import { getDocs, onSnapshot, query,collection} from 'firebase/firestore';
//import '../styles/style.css';
import { forums } from '../lib/firestore-collections';


export default function Forum() {
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
  

  return (
    <div id="thread">


      {Forum.map((forum) =>
      <div key={forum.id} className="thread-post" >

        
        {forum.data().title}
      
        <br></br>
        
        {forum.data().message}

        <br></br>

        {forum.data().topic}

        
      </div>
      )}

    </div>

  )


}
