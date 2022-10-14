import React, {useRef, useState} from 'react';
import { useAuth } from '../contexts/auth-context';
import {collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../lib/init-firebase';
import { query, orderBy, limit, addDoc } from "firebase/firestore";  
import { useCollectionData } from 'react-firebase-hooks/firestore';


/*
import { collectionGroup, query, where, getDocs } from "firebase/firestore";  

const museums = query(collectionGroup(db, 'landmarks'), where('type', '==', 'museum'));
const querySnapshot = await getDocs(museums);
querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
});

*/

function Chat() {

    return (
      <div>
        <header>
          <h1>⚛️🔥💬</h1>
        </header>
  
        <section>
          <ChatRoom />
        </section>
  
      </div>
    );
}

function ChatRoom() {
    const {currentUser} = useAuth();
    const dummy = useRef();
    const messagesRef = collection(db, 'sessions', 'G3hUPze6EswGSb2hWrdf', 'messages');


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
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
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