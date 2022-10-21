import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/auth-context';
import { collection, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { query, orderBy, limit, addDoc } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { allSessions } from '../lib/firestore-collections';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SideBar from '../components/SideBar';
import Send from '../images/send.png'
import { motion } from 'framer-motion';


function Chat() {
  const [sessionName, setSessionName] = useState([]);
  const { currentUser } = useAuth();

  const getSessionName = async (chatID) => {
    const sessionChatRef = doc(allSessions, chatID);
    const docSnap = await getDoc(sessionChatRef);
    if (docSnap.exists()) {
      setSessionName(docSnap.data().module);
    }
  }

  let params = useParams();

  useEffect(() => {
    getSessionName(params.chatID)
  }, [params.chatID])

  return (
    <div >
      <SideBar />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='chatContainer' style={{'height': '83vh'}}>
          <header style={{ 'border': 'solid', 'textAlign': 'center', 'backgroundColor': 'rgba(102, 4, 37, 0.249)', 'borderWidth': '0' }}>
            <h1 style={{ 'fontSize': '1.4em' }}>{sessionName}</h1>
          </header>

          <section>
            <ChatRoom currentUserUID={currentUser.uid} currentUserDisplay={currentUser.displayName}
              photoURL={currentUser.photoURL} />
          </section>

        </div>
      </motion.div>
    </div>

  );
}

function ChatRoom(currentUser) {
  const dummy = useRef();
  let params = useParams();

  const messagesRef = collection(allSessions, params.chatID, 'messages');




  const q = query(messagesRef, orderBy("createdAt", "asc"), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    // const { uid, photoURL } = auth.currentUser;


    //  const { uid } = currentUserUID;
    //  const { displayName } = currentUserDisplay;



    await addDoc(messagesRef, ({
      text: formValue,
      createdAt: serverTimestamp(),
      senderID: currentUser.currentUserUID,
      senderName: currentUser.currentUserDisplay,
      photoURL: currentUser.photoURL
    }))

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main style={{'height': '60vh'}}>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message" className='messageInput'/>

      <button type="submit" disabled={!formValue} style={{ 'backgroundImage': `url(${Send})` }} className='sendMessageButton'></button>

    </form>
  </>)
}

function ChatMessage(props) {
  const { currentUser } = useAuth();
  const { text, senderID, senderName, photoURL} = props.message;

  const messageClass = senderID === currentUser.uid ? 'sent' : 'received';

  const name = senderName === currentUser.displayName ? 'You' : senderName;

 // const timeSent = new Date(createdAt.seconds * 1000).toLocaleDateString("en-US")

  //  var stringified = createdAt.toDate().toISOString();
  //  var split1 = stringified.split('T');
  //  var time = split1[1].split('.');

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='profile' className='chatProfilePic' />
      <div className='messageContainer'>
        <p><span style={{'fontSize': '0.7em', 'color': 'black'}}>{name}</span><br></br>
          {text}
          </p>
      </div>
    </div>
  </>)
}

export default Chat