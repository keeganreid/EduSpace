//the page where the forums will be answered 
import React, { useEffect, useState, useRef } from 'react'
import { getDocs, getDoc, onSnapshot, query, collection, where, addDoc, doc,updateDoc} from 'firebase/firestore';
import { forums,users } from '../lib/firestore-collections';
import { useParams, NavLink } from 'react-router-dom'
import { async } from '@firebase/util';
import { useAuth } from '../contexts/auth-context';
import SideBar from '../components/SideBar';







function CommentForum() {

  const [cmnt, setComments] = useState([]);
  const [Forum, setForum] = useState([]);
  const params = useParams();
  const frmID = params.frmID;
  const messageRef= useRef();
  const qComments = collection(forums, frmID, "comments")


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

  
  /*Adding the clear input code beneth*/
  const firstRef = useRef(null);
  const lastRef = useRef(null);

    

  
/*Ended adding the clear input code*/

  const getComments = async() =>{
    onSnapshot(qComments, (snapShot) =>
      setComments(snapShot.docs.map((doc) => doc)))
  }
//getting the forum from the database the entire time
  const getForumData = async() =>{
    const forumRef = doc(forums, frmID);
    const docSnap = await getDoc(forumRef);
//using on snap to keep fetching from the database
    if(docSnap.exists()){
      setForum(docSnap.data());
    }
  }




  useEffect(() => {
    getForumData();
    getComments();
  }, [frmID])


//THe function for a submit
    function handleSubmit(e){
      e.preventDefault();

      const message = messageRef.current.value;

      addDoc(qComments, {message});
     

    // 👇️ clear all input values in the form
    e.target.reset();
      //window.location.reload();
     // return addDoc();
      
  }   



  /*adding a function to add a point every time a session is created*/

  async function increaseStointHandler(userID, pointsRef) {
     
    /*Adding code for a user to get points */

    setUserPoints(pointsRef + 5);
    let data = {
      points: userPoints + 5
    }
    
    await updateDoc(doc(users, userID), data);
        alert ("Thank you for answering a question on the form, five points have been given to you!")

  
  
}/*done with it*/


  const refreshPage = ()=>{

//grab the target input and set it empty. you can use it in the onclick
      }


      //This code WAS added to clear the input fields on the entire page

      

 


  return (

<div>
<SideBar/>
    <div>
      
      <label style={{'fontSize': '1.2em', 'color': 'blue'}}>{Forum.title}</label>
      <br></br>
      <label>{Forum.message}</label>
      <br></br>
      <label style={{'fontSize': '0.8em'}}>Topic: {Forum.topic}</label>
      <main style={{'height': '65vh'}}>
      {cmnt.map((forum) =>
        <div key={forum.id} className="thread-post">

          
          {forum.data().message}


        </div>
      )}
      </main>

      <form onSubmit={handleSubmit}>
        <textarea
        id='message' 
        ref={messageRef} 
        placeholder='Comment'
        autoComplete='off'
        required
        className='bigTextArea'


        />

        <button type='submit' style={{'marginLeft': '3em', 'position': 'absolute', 'bottom': '2%'}} className='button-27' onClick={() => increaseStointHandler(currentUser.uid, userPoints)} >Add Comment</button>
        {/* <button type='submit'>Add a comment</button>*/}

      </form>

    </div>
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