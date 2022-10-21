//The authentication where a user is added is placed here
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, methods} from '../lib/init-firebase';
import {users} from '../lib/firestore-collections';
import {setDoc, doc, updateDoc} from 'firebase/firestore';
import { storage } from '../lib/init-firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);
    const  points = 0;

    function signup(email, password) {
        return methods.createUserWithEmailAndPassword(auth, email, password).then(cred =>{
            if (cred !== undefined){
                let userType;
            if (email.substring(email.indexOf('@') + 1) === "sun.ac.za"){
                userType = "student";
            }
            else{
                userType = "company";
            }
            let data = {
                type: userType,
                points : 300        //giving a new user 300 points when they sign up
            };
            return setDoc(doc(users, cred.user.uid), data);
            }            
          }       
          )
    }

    function login(email, password) {
        return methods.signInWithEmailAndPassword(auth, email, password)
}

async function updateUserProfile(file, usernameRef, companyNameRef, companyURLRef, fullnameRef, facultyRef, degreeRef, bioRef) {
    if (file !== null){

        let photoURL;
        if (file.name !== undefined){
    const fileRef = ref(storage, `profilePictures/${file.name}`);
    
    const snapshot = await uploadBytes(fileRef, file);
    photoURL = await getDownloadURL(fileRef);
        }
        else{
            photoURL = file;
        }
  
   await methods.updateProfile(currentUser, {photoURL, displayName: usernameRef.current.value});
}
else{
 await methods.updateProfile(currentUser, {photoURL: 'https://firebasestorage.googleapis.com/v0/b/eduspace-ed18f.appspot.com/o/defaultProfile%2Fuser.png?alt=media&token=1f3735cc-e3d5-4f02-956f-9a46d2c77191'
  , displayName: usernameRef.current.value});
}
let data;
if (currentUser.userType === 'student'){
    data = {
        username: currentUser.displayName,
        fullname: fullnameRef.current.value,
        faculty: facultyRef.current.value,
        degree: degreeRef.current.value,
        bio: bioRef.current.value
       // points:???
    }
}
else{
    data = {
        username: currentUser.displayName,
        companyName: companyNameRef.current.value,
        companyURL: companyURLRef.current.value,
        bio: bioRef.current.value
    }
}

    return updateDoc(doc(users, currentUser.uid), data);
    
  }


    function logout() {
        return methods.signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = methods.onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        updateUserProfile,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}