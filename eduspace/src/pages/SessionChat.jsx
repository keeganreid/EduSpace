import React, {useRef, useState} from 'react';
import { useAuth } from '../contexts/auth-context';
import {collection, serverTimestamp, doc, getDoc} from 'firebase/firestore';
import { query, orderBy, limit, addDoc } from "firebase/firestore";  
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { allSessions } from '../lib/firestore-collections';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import SideBar from '../components/SideBar';
import Send from '../images/send.png'


function Chat() {

 const [sessionName, setSessionName] = useState([]);

  const getSessionName = async(chatID) =>{
    const sessionChatRef = doc(allSessions, chatID);
    const docSnap = await getDoc(sessionChatRef);
    if (docSnap.exists()) {
      setSessionName(docSnap.data().module);
    }
  }

  let params = useParams();

  useEffect(()=>{
   getSessionName(params.chatID)
  }, [params.chatID])

    return (
      <div >
        <SideBar/>
      <div className='chatContainer'>
        <header style={{'border': 'solid', 'textAlign': 'center', 'background-color': 'rgba(102, 4, 37, 0.249)', 'border-width': '0' }}>
          <h1 style={{'font-size': '1.4em'}}>{sessionName}</h1>
        </header>
  
        <section>
          <ChatRoom />
        </section>
  
      </div>
      </div>
      
    );
}

function ChatRoom(chatID) {
    const {currentUser} = useAuth();
    const dummy = useRef();
    let params = useParams();

    const messagesRef = collection(allSessions, params.chatID, 'messages');


    const q = query(messagesRef, orderBy("createdAt", "asc"), limit(25));
  
    const [messages] = useCollectionData(q, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
       // const { uid, photoURL } = auth.currentUser;

       const { uid } = currentUser.uid;
  
      await addDoc(messagesRef,({
        text: formValue,
        createdAt: serverTimestamp(),
       // uid
       // photoURL
      }))
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message" />
  
        <button type="submit" disabled={!formValue} style={{'backgroundImage': `url(${Send})`}} className='sendMessageButton'></button>
  
      </form>
    </>)
  }

  function ChatMessage(props) {
    const {currentUser} = useAuth();
    const { text, uid} = props.message;
  
    const messageClass = uid === currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        
        <p>{text}</p>
      </div>
    </>)
  }

export default Chat