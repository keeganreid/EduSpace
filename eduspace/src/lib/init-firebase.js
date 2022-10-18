import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth'
import {getStorage} from 'firebase/storage';


const app = initializeApp({
  apiKey: 'AIzaSyAoBmkEwOiWo9t6BhSbhI_U0C2njZZ2wbE',
  authDomain: 'eduspace-ed18f.firebaseapp.com',
  databaseURL:
    'https://eduspace-ed18f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'eduspace-ed18f',
  storageBucket: 'eduspace-ed18f.appspot.com',
  messagingSenderId: '550728806435',
  appId: '1:550728806435:web:2ccf46f9f302ce867ac196',
});

export const auth = getAuth(app);


export const db = getFirestore(app);

export const methods = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
}
 //What I added to be able to write and view the messages 



export const storage = getStorage(app);

export default app;





