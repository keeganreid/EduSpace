import React, { useEffect,useState } from 'react'
import { getDocs, onSnapshot, query,collection} from 'firebase/firestore';
import { forums } from '../lib/firestore-collections';
import {useParams,NavLink} from 'react-router-dom'
import { async } from '@firebase/util';

function CommentForum() {

    const [cmnt,setComments] = useState([]);
    const params = useParams();
    const frmId = params.frmID;

    const getForum = async(name)=>{

        const data = await fetch (
                
        );
    }

    useEffect(() =>{
console.log(frmId)

},[frmId]);

    // const [comments, setComments] = useState();*/
    // const [Forum, setForums] = useState([]);//added from the forums
    // //const params = useParams();
     

    // useEffect(      //added from the forums
    //     () =>
    //      onSnapshot(forums, (snapShot) =>
    //     setForums(snapShot.docs.map((doc) => doc ))
    //     ),[]);

  return (

        //added code from the viewforums
    //     <div id="thread" >
  
  
    //     {Forum.map((forum) =>
    //     <NavLink to={`/comment/${forum.id}`}>
    //     <div key={frmId} className="thread-post">
       
          
    //       {forum.data().title}
          
        
    //       <br></br>
          
    //       {forum.data().message}
  
    //       <br></br>
          
  
    //       {forum.data().topic}
    //       <br></br>
  
          
    //     </div>
    //     </NavLink>
    //     )}
  
    //   </div>
            //Ending of the code from the viewForums


    <div><p>wertyu {frmId}</p></div>
    /*<div id="thread" >


    {frmId.map((forum) =>

    <div key={forum.id} className="thread-post">
   
      
      {forum.data().title}
    
      <br></br>
      
      {forum.data().message}

      <br></br>
      

      {forum.data().topic}
      <br></br>

      
    </div>

    )}

  </div>*/
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