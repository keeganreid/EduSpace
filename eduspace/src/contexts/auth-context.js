//The authentication where a user is added is placed here
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, methods} from '../lib/init-firebase';
import {users} from '../lib/firestore-collections';
import {setDoc, doc, updateDoc} from 'firebase/firestore';
import { storage } from '../lib/init-firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const AuthContext = createContext()   // create context allows us to use this page's functionality over any page where it is called 

export function useAuth() {
    return useContext(AuthContext)  //this use Auth function is how we gain access to the context
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();  //managing the user
    const [loading, setLoading] = useState(true);

    //this function calls the create user firebase function and then uses the created document id 
    function signup(email, password) {
        return methods.createUserWithEmailAndPassword(auth, email, password).then(cred =>{
            if (cred !== undefined){
                let userType;
            if (email.substring(email.indexOf('@') + 1) === "sun.ac.za"){       //where it must be a student email
                userType = "student";
            }
            else{
                userType = "company";       //default to company type if not a student
            }
            let data = {
                type: userType,
                points : 500
            };
            return setDoc(doc(users, cred.user.uid), data);
            }            
          }       
          )
    }

    function login(email, password) {
        return methods.signInWithEmailAndPassword(auth, email, password)
}

async function updateUserProfile(type, file, usernameRef, companyNameRef, companyURLRef, fullnameRef, facultyRef, degreeRef, bioRef) {
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
 await methods.updateProfile(currentUser, {photoURL: 'https://firebasestorage.googleapis.com/v0/b/eduspace-ed18f.appspot.com/o/defaultProfile%2Fuser.png?alt=media&token=1f3735cc-e3d5-4f02-956f-9a46d2c77191'  //getting the photo to upload
  , displayName: usernameRef.current.value});
}
let data;

if (type === 'student'){
    data = {
        username: currentUser.displayName,
        fullname: fullnameRef.current.value,
        faculty: facultyRef.current.value,
        degree: degreeRef.current.value,
        bio: bioRef.current.value
    }
}
else
{
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