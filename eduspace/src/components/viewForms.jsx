import React, { useEffect, useState,useRef } from 'react';
import { getDocs, onSnapshot, query,collection, updateDoc, doc, getDoc, FieldValue} from 'firebase/firestore';
//import '../styles/style.css';
import { forums } from '../lib/firestore-collections';
import { NavLink } from 'react-router-dom';
import up from '../images/up.png'
import down from '../images/down (1).png'



export default function Forum() {
  const [Forum, setForums] = useState([]);
  const titleRef = useRef();
  const [messages, setMessages] = useState(null);
  const [snapShot, setSnapShot]= useState([]);

  //For the only click once
  const [hasClicked, setHasClicked] = useState(false)

  useEffect(
    () =>
     onSnapshot(forums, (snapShot) =>
    setForums(snapShot.docs.map((doc) => doc ))
    ),[]);

    async function upVote (forumID, countRef){ //button for the upvote
      //window.location.reload();
      //console.log('Poes')
      //const increment =firebase.firestore.FieldValue.increment(1);
      let data = {
        count: countRef + 1
      }
      updateDoc(doc(forums, forumID), data);
      setHasClicked(true)
    
    
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

 const btnClickHandler = () => {
  
  setHasClicked(true)
  
}

  return (
    <main id="thread" >

      {Forum.map((forum) =>
      <div key={forum.id} className='a' > 

      <div style={{'display': 'inline'}}>
       <img  className='myUpButton' src={up} alt="upvote" onClick={ () => upVote(forum.id, forum.data().count) }/>
        <img className='myUpButton' src={down} alt="downvote" onClick={ () => downVote(forum.id, forum.data().count)}/>
         <label>{forum.data().count}</label>
      </div>

      <NavLink  to={`/comment/${forum.id}`} style={{'textDecoration': 'none', 'color': 'black'}}>
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

    </main>

  )


}
